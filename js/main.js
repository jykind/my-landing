// ==========================================
// Global Variables
// ==========================================
let currentFilter = 'all';
let referencesData = [];
let reviewsData = [];

// ==========================================
// Mobile Menu Toggle
// ==========================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==========================================
// Smooth Scroll
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Back to Top Button
// ==========================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// Load References
// ==========================================
async function loadReferences() {
    try {
        const response = await fetch('tables/references?limit=100');
        const result = await response.json();
        referencesData = result.data || [];
        displayReferences(referencesData);
    } catch (error) {
        console.error('레퍼런스 로드 오류:', error);
        document.getElementById('referencesGrid').innerHTML = 
            '<p style="text-align: center; color: #ea4335;">레퍼런스를 불러오는 중 오류가 발생했습니다.</p>';
    }
}

function displayReferences(references) {
    const grid = document.getElementById('referencesGrid');
    
    if (!references || references.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">등록된 레퍼런스가 없습니다.</p>';
        return;
    }

    grid.innerHTML = references.map(ref => `
        <div class="reference-card fade-in-up" data-category="${ref.category}">
            <span class="category-badge">${ref.category}</span>
            <h3>${ref.company}</h3>
            <p class="course-name">${ref.course_name}</p>
            <p class="description">${ref.description}</p>
            <div class="meta">
                <span><i class="far fa-calendar"></i> ${ref.duration}</span>
                <span><i class="fas fa-users"></i> ${ref.participants}명</span>
            </div>
        </div>
    `).join('');
}

// ==========================================
// Filter References
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            currentFilter = filter;
            
            // Filter and display
            if (filter === 'all') {
                displayReferences(referencesData);
            } else {
                const filtered = referencesData.filter(ref => ref.category === filter);
                displayReferences(filtered);
            }
        });
    });
});

// ==========================================
// Load Reviews
// ==========================================
async function loadReviews() {
    try {
        const response = await fetch('tables/reviews?limit=100');
        const result = await response.json();
        // Only show approved reviews
        reviewsData = (result.data || []).filter(review => review.approved === true);
        displayReviews(reviewsData);
    } catch (error) {
        console.error('리뷰 로드 오류:', error);
        document.getElementById('reviewsGrid').innerHTML = 
            '<p style="text-align: center; color: #ea4335;">리뷰를 불러오는 중 오류가 발생했습니다.</p>';
    }
}

function displayReviews(reviews) {
    const grid = document.getElementById('reviewsGrid');
    
    if (!reviews || reviews.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">등록된 리뷰가 없습니다.</p>';
        return;
    }

    grid.innerHTML = reviews.map(review => `
        <div class="review-card fade-in-up">
            <div class="review-header">
                <div class="review-author">
                    <h4>${review.name}</h4>
                    <p class="company">${review.company}</p>
                    ${review.position ? `<p class="position">${review.position}</p>` : ''}
                </div>
                <div class="review-rating">
                    ${generateStars(review.rating)}
                </div>
            </div>
            <p class="review-content">${review.content}</p>
            <span class="review-course">${review.course}</span>
        </div>
    `).join('');
}

function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// ==========================================
// Contact Form Submission
// ==========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '전송 중...';
    submitBtn.disabled = true;
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        company: document.getElementById('company').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        status: '대기중'
    };
    
    try {
        const response = await fetch('tables/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            alert('문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
            contactForm.reset();
        } else {
            throw new Error('전송 실패');
        }
    } catch (error) {
        console.error('문의 제출 오류:', error);
        alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// ==========================================
// Review Form Submission
// ==========================================
const reviewForm = document.getElementById('reviewForm');

reviewForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = reviewForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '제출 중...';
    submitBtn.disabled = true;
    
    const ratingValue = document.querySelector('input[name="rating"]:checked');
    
    if (!ratingValue) {
        alert('평점을 선택해주세요.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        return;
    }
    
    const formData = {
        name: document.getElementById('reviewName').value,
        company: document.getElementById('reviewCompany').value,
        position: document.getElementById('reviewPosition').value,
        course: document.getElementById('reviewCourse').value,
        rating: parseInt(ratingValue.value),
        content: document.getElementById('reviewContent').value,
        approved: false // 관리자 승인 대기
    };
    
    try {
        const response = await fetch('tables/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            alert('리뷰가 성공적으로 제출되었습니다. 관리자 승인 후 게시됩니다.');
            reviewForm.reset();
            // Reset rating stars
            document.querySelectorAll('input[name="rating"]').forEach(input => {
                input.checked = false;
            });
        } else {
            throw new Error('제출 실패');
        }
    } catch (error) {
        console.error('리뷰 제출 오류:', error);
        alert('리뷰 제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// ==========================================
// Initialize on Page Load
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    loadReferences();
    loadReviews();
    
    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

// ==========================================
// Navbar Scroll Effect
// ==========================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'var(--shadow-sm)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-md)';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// Loading Indicator
// ==========================================
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = '<div class="spinner"></div>';
}

// ==========================================
// Error Message Display
// ==========================================
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.innerHTML = `<p style="text-align: center; color: var(--danger-color); grid-column: 1/-1;">${message}</p>`;
}

// ==========================================
// Utility Functions
// ==========================================
function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// ==========================================
// Form Validation
// ==========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9-]+$/;
    return re.test(phone);
}

// Add real-time validation
document.getElementById('email')?.addEventListener('blur', function() {
    if (this.value && !validateEmail(this.value)) {
        this.style.borderColor = 'var(--danger-color)';
        alert('올바른 이메일 형식을 입력해주세요.');
    } else {
        this.style.borderColor = 'var(--border-color)';
    }
});

document.getElementById('phone')?.addEventListener('blur', function() {
    if (this.value && !validatePhone(this.value)) {
        this.style.borderColor = 'var(--danger-color)';
        alert('올바른 전화번호 형식을 입력해주세요.');
    } else {
        this.style.borderColor = 'var(--border-color)';
    }
});

// ==========================================
// Console Welcome Message
// ==========================================
console.log('%cNEX MEDIA', 'font-size: 24px; font-weight: bold; color: #1a73e8;');
console.log('%c생성형AI 교육 전문가 - 김재연', 'font-size: 14px; color: #34a853;');
console.log('Website developed with ❤️');
