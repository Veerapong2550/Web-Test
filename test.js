/* ============================================================
   Sweet Gypsy Design — main.js
   Language switcher (TH / EN / ZH / JA) + UI interactions
   ============================================================ */

/* ─── TRANSLATIONS ─── */
const i18n = {
  th: {
    nav_home: 'หน้าแรก',
    nav_shop: 'สินค้า',
    nav_story: 'เรื่องราว',
    nav_contact: 'ติดต่อ',
    hero_tag: 'เชียงใหม่ · เครื่องประดับทำมือ',
    hero_title: 'เครื่องประดับ<br><em>เล่าเรื่อง…</em><br>จากหัวใจหนึ่ง',
    hero_sub: 'ทุกชิ้นงานถูกสร้างขึ้นจากมือ และเต็มไปด้วยหัวใจ จากศิลปินผู้เดินทาง ทั้งในโลกจริงและในจิตใจ',
    hero_cta1: 'เลือกเรื่องราวของคุณ',
    hero_cta2: 'เรื่องราวของเรา',
    stat1: 'ชิ้นงานที่สร้าง',
    stat2: 'ทำมือทุกชิ้น',
    stat3: 'คอลเลคชัน',
    col_tag: 'คอลเลคชัน',
    col_title: 'เลือก<em>เรื่องราว</em><br>ที่ใช่สำหรับคุณ',
    how_tag: 'วิธีสั่งซื้อ',
    how_title: 'สั่งง่าย <em>ใน 4 ขั้นตอน</em>',
    rev_tag: 'รีวิวจากลูกค้า',
    rev_title: 'เสียงจาก<em>หัวใจ</em>ที่สวมใส่',
    story_tag: 'เรื่องราวของเรา',
    story_title: 'จากปลาย<em>พู่กัน</em><br>สู่เครื่องประดับ',
    contact_title: 'พูดคุยกับเรา',
    contact_send: 'ส่งข้อความ →',
    alert_order: ' ติดต่อสั่งซื้อผ่าน Line OA หรือ Instagram DM ของเราได้เลยค่ะ\n📱 Line: @sweetgypsy\n📸 IG: @sweetgypsys',
    alert_form: '✉️ ขอบคุณนะคะ! เราจะติดต่อกลับภายใน 24 ชั่วโมง ',
  },
  en: {
    nav_home: 'Home',
    nav_shop: 'Shop',
    nav_story: 'Our Story',
    nav_contact: 'Contact',
    hero_tag: 'Chiang Mai · Handmade Jewelry',
    hero_title: 'Jewelry that<br><em>tells stories…</em><br>from the heart',
    hero_sub: 'Every piece is crafted by hand and filled with heart — from an artist who journeys both in the real world and within.',
    hero_cta1: 'Choose your story',
    hero_cta2: 'Our story',
    stat1: 'Pieces crafted',
    stat2: 'Handmade',
    stat3: 'Collections',
    col_tag: 'Collections',
    col_title: 'Choose the <em>story</em><br>that speaks to you',
    how_tag: 'How to Order',
    how_title: 'Simple <em>4-step ordering</em>',
    rev_tag: 'Customer Reviews',
    rev_title: 'Words from <em>hearts</em> that wear us',
    story_tag: 'My Story',
    story_title: 'From brush<br><em>to jewelry</em>',
    contact_title: 'Get in touch',
    contact_send: 'Send message →',
    alert_order: ' Contact us via Line OA or Instagram DM\n📱 Line: @sweetgypsy\n📸 IG: @sweetgypsys',
    alert_form: '✉️ Thank you! We will get back to you within 24 hours ',
  },
  zh: {
    nav_home: '首页',
    nav_shop: '商品',
    nav_story: '品牌故事',
    nav_contact: '联系我们',
    hero_tag: '清迈 · 手工珠宝',
    hero_title: '每件珠宝<br><em>述说故事…</em><br>来自内心',
    hero_sub: '每件作品都由双手精心打造，充满心意——来自一位行走于现实与内心世界的艺术家。',
    hero_cta1: '选择您的故事',
    hero_cta2: '了解我们',
    stat1: '已制作作品',
    stat2: '全部手工',
    stat3: '系列',
    col_tag: '产品系列',
    col_title: '选择<em>属于您</em><br>的故事',
    how_tag: '购买方式',
    how_title: '简单 <em>4步下单</em>',
    rev_tag: '顾客评价',
    rev_title: '来自<em>佩戴者</em>的心声',
    story_tag: '我的故事',
    story_title: '从画笔<br><em>到珠宝</em>',
    contact_title: '联系我们',
    contact_send: '发送消息 →',
    alert_order: ' 请通过 Line OA 或 Instagram DM 联系我们\n📱 Line: @sweetgypsy\n📸 IG: @sweetgypsys',
    alert_form: '✉️ 谢谢您！我们将在24小时内回复 ',
  },
  ja: {
    nav_home: 'ホーム',
    nav_shop: '商品',
    nav_story: 'ストーリー',
    nav_contact: 'お問い合わせ',
    hero_tag: 'チェンマイ · ハンドメイドジュエリー',
    hero_title: '物語を纏う<br><em>ジュエリー…</em><br>心から心へ',
    hero_sub: 'すべての作品は手作りで、心を込めて。現実と内なる世界を旅するアーティストからのギフトです。',
    hero_cta1: 'あなたの物語を選ぶ',
    hero_cta2: '私たちのストーリー',
    stat1: '制作した作品',
    stat2: '完全ハンドメイド',
    stat3: 'コレクション',
    col_tag: 'コレクション',
    col_title: 'あなたに合う<em>物語</em><br>を見つけよう',
    how_tag: 'ご注文方法',
    how_title: '簡単 <em>4ステップ注文</em>',
    rev_tag: 'お客様レビュー',
    rev_title: '身に纏う<em>心の声</em>',
    story_tag: '私のストーリー',
    story_title: '絵筆から<br><em>ジュエリーへ</em>',
    contact_title: 'お問い合わせ',
    contact_send: 'メッセージを送る →',
    alert_order: ' Line OA または Instagram DM でご連絡ください\n📱 Line: @sweetgypsy\n📸 IG: @sweetgypsys',
    alert_form: '✉️ ありがとうございます！24時間以内にご返信いたします ',
  }
};

/* ─── ACTIVE LANGUAGE ─── */
let currentLang = 'en';

/* ─── APPLY TRANSLATIONS ─── */
function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
}

/* ─── PUBLIC: called by onclick in HTML ─── */
function setLang(lang) {
  applyLang(lang);
}

/* ─── NAV SCROLL SHADOW ─── */
function initNavScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    nav.style.boxShadow = window.scrollY > 50
      ? '0 2px 20px rgba(61,43,31,.08)'
      : 'none';
  });
}

/* ─── PRODUCT CARD BUTTONS ─── */
function initProductCards() {
  document.querySelectorAll('.product-overlay-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = i18n[currentLang];
      alert(t ? t.alert_order : i18n.en.alert_order);
    });
  });
}

/* ─── CONTACT FORM ─── */
function initContactForm() {
  const submitBtn = document.querySelector('.btn-submit');
  if (!submitBtn) return;
  submitBtn.addEventListener('click', () => {
    const t = i18n[currentLang];
    alert(t ? t.alert_form : i18n.en.alert_form);
  });
}

/* ─── HAMBURGER MENU ─── */
function initHamburger() {
  const hamburger = document.getElementById('nav-hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Close menu when a nav link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });
}

/* ─── INIT ON DOM READY ─── */
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initProductCards();
  initContactForm();
  initHamburger();
  applyLang('en'); // default language
});