
const translations = {
  ko: {
    church_name: '앤아버 소망교회',
    home: '홈',
    about: '교회 소개',
    worship: '예배',
    ministries: '사역',
    events: '행사',
    gallery: '사진첩',
    sermons: '설교',
    serve: '봉사',
    give: '헌금',
    contact: '문의하기',
    worship_title: '예배 시간',
    worship_1: '한국어 예배: 일요일 오후 2시 (본당)',
    worship_2: '영어 예배: 일요일 오후 2시 (친교실)',
    worship_3: '청소년 예배 (OYC): 토요일 오후 5:30',
    worship_4: '청년 예배: 금요일 오후 6:30',
    worship_5: '새벽기도: 평일 오전 5:30',
    worship_6: '캠퍼스 아침 기도: 평일 오전 7:00 (더글라스 채플)',
    worship_7: '찬양과 기도의 밤: 매월 마지막 금요일 오후 8:00',
    events_title: '예정된 행사 및 소식',
    events_desc: '락인, 콘서트, 야외 예배 등 교회 커뮤니티 행사에 참여하세요.',
    gallery_title: '사진첩',
    contact_title: '문의하기',
    address: '<strong>주소:</strong> 미시간 앤아버 메인 스트리트 2500번지',
    phone: '<strong>전화:</strong> 734-678-6462 (배헌석 목사님)',
    footer: '&copy; 2025 앤아버 소망교회. 판권 소유.'
  },
  en: {
    church_name: 'Ann Arbor Hope Church',
    home: 'Home',
    about: 'About',
    worship: 'Worship',
    ministries: 'Ministries',
    events: 'Events',
    gallery: 'Gallery',
    sermons: 'Sermons',
    serve: 'Serve',
    give: 'Give',
    contact: 'Contact',
    worship_title: 'Worship Schedule',
    worship_1: 'Korean Worship: Sundays at 2:00 PM (Main Sanctuary)',
    worship_2: 'English Worship: Sundays at 2:00 PM (Fellowship Room)',
    worship_3: 'Youth Worship (OYC): Saturdays at 5:30 PM',
    worship_4: 'College/Young Adult Worship: Fridays at 6:30 PM',
    worship_5: 'Morning Prayer: Weekdays at 5:30 AM',
    worship_6: 'Campus Morning Prayer: Weekdays at 7:00 AM @ Douglas Chapel',
    worship_7: 'Praise & Prayer Night: Last Friday each month at 8:00 PM',
    events_title: 'Upcoming Events & News',
    events_desc: 'Visit our church to join our community events, including lock-ins, concerts, and outdoor worship services.',
    gallery_title: 'Photo Gallery',
    contact_title: 'Contact Us',
    address: '<strong>Address:</strong> 2500 S Main St, Ann Arbor, MI 48103',
    phone: '<strong>Phone:</strong> 734-678-6462 (Pastor Heonseok Bae)',
    footer: '&copy; 2025 Ann Arbor Hope Church. All rights reserved.'
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}
