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
    col_desc: 'ทุกชิ้นงานมีชื่อ มีที่มา และมีความรู้สึกฝังอยู่<br>เราไม่ได้แค่ทำของสวย แต่ทำ \'ของที่มีหัวใจ\'',
    product_cat_1: 'ต่างหู',
    product_name_1: 'เสียงกระซิบจากแสงดาว',
    product_story_1: 'สำหรับคืนที่คุณต้องการความหวัง',
    product_price_1: '฿ 490 – 790',
    product_cat_2: 'สร้อยคอ',
    product_name_2: 'ดอกไม้ที่รอดในพายุ',
    product_story_2: 'สำหรับวันที่คุณลุกขึ้นมาแม้จะเคยล้ม',
    product_price_2: '฿ 690 – 1,290',
    product_cat_3: 'กำไล',
    product_name_3: 'เถาวัลย์โอบใจ',
    product_story_3: 'สำหรับความรักที่ยังงดงาม แม้จะไม่สมบูรณ์',
    product_price_3: '฿ 390 – 690',
    product_cat_4: 'สร้อยคอมือ',
    product_name_4: 'สายลมแห่งความทรงจำ',
    product_story_4: 'สำหรับวันที่คุณอยากกอดใครสักคนที่อยู่ไกล',
    product_price_4: '฿ 590 – 990',
    product_overlay_btn: 'ดูรายละเอียด',
    inspi_tag: 'My Inspiration',
    inspi_title: 'ทุกชิ้นงาน<em>มีเรื่องราว</em>',
    inspi_name_1: 'เสียงกระซิบจากแสงดาว',
    inspi_desc_1: 'แรงบันดาลใจจากคืนที่หนาวที่สุด แต่ท้องฟ้ายังเต็มไปด้วยดาว บางครั้งความหวังก็ซ่อนอยู่ในความมืด',
    inspi_link: 'ดูคอลเลคชัน',
    inspi_name_2: 'ดอกไม้ที่รอดในพายุ',
    inspi_desc_2: 'เพราะดอกไม้ที่สวยที่สุดมักงอกงามจากดินที่แห้งแล้งที่สุด เช่นเดียวกับพลังของผู้หญิงที่ไม่เคยยอมแพ้',
    inspi_name_3: 'เถาวัลย์โอบใจ',
    inspi_desc_3: 'ความรักไม่จำเป็นต้องสมบูรณ์แบบเพื่อจะงดงาม บางครั้งรอยแตกนั่นแหละคือที่ที่แสงส่องเข้ามา',
    rev_tag: 'รีวิวจากลูกค้า',
    rev_title: 'เสียงจาก<em>หัวใจ</em>ที่สวมใส่',
    review_text_1: '"ซื้อให้ตัวเองวันเกิด ชอบมากที่แต่ละชิ้นมีความหมาย ไม่เหมือนเครื่องประดับทั่วไปเลยค่ะ"',
    review_author_1: 'Ploy K. ',
    review_location_1: 'เชียงใหม่',
    review_text_2: '"ซื้อเป็นของขวัญให้แฟน เขาชอบมากค่ะ บรรจุภัณฑ์สวยมาก และน้าเจ้าของใจดีตอบไวมาก"',
    review_author_2: 'Mint S. ',
    review_location_2: 'กรุงเทพ',
    review_text_3: '"งานละเอียดมากค่ะ ใส่แล้วได้รับคำชมทุกครั้ง เพื่อนถามตลอดว่าซื้อที่ไหน"',
    review_author_3: 'Fern T. ',
    review_location_3: 'เชียงใหม่',
    story_tag: 'เรื่องราวของเรา',
    story_title: 'จากปลาย<em>พู่กัน</em><br>สู่เครื่องประดับ',
    story_p1: 'Sweet Gypsy ก่อตั้งโดยอดีตนักเรียนศิลปะผู้หลงใหลในการสร้างสรรค์ และเชื่อว่าความฝันไม่จำเป็นต้องสมบูรณ์แบบ',
    story_p2: 'จากจุดเริ่มต้นที่ไร้หลักแหล่ง สู่ร้านเล็กๆ ที่เป็นที่พักพิงของใจ ที่ Kad Klang Wiang เชียงใหม่',
    story_quote: 'เราเชื่อในความงามของความไม่สมบูรณ์ และในพลังของเรื่องราวที่ถูกสวมใส่',
    story_cta: 'พูดคุยกับเรา',
    how_tag: 'วิธีสั่งซื้อ',
    how_title: 'สั่งง่าย <em>ใน 4 ขั้นตอน</em>',
    step_1_title: 'เลือกสินค้า',
    step_1_desc: 'เลือกชิ้นงานที่ใช่สำหรับคุณจากหน้า Collections หรือทักมาปรึกษาได้เลย',
    step_2_title: 'ทัก Line / DM',
    step_2_desc: 'ติดต่อผ่าน Line OA หรือ Instagram DM แจ้งชื่อสินค้าที่ต้องการ',
    step_3_title: 'ชำระเงิน',
    step_3_desc: 'โอนเงินผ่าน PromptPay หรือ QR Code ที่เราส่งให้ รับทุกธนาคาร',
    step_4_title: 'รับของ / จัดส่ง',
    step_4_desc: 'รับที่ร้าน Kad Klang Wiang หรือจัดส่งทั่วไทยผ่าน Kerry / Flash',
    contact_title: 'พูดคุยกับเรา',
    contact_sub: 'อยากสั่งทำพิเศษ มีคำถาม หรือแค่ต้องการคนฟัง?<br>เราพร้อมตอบกลับทุกข้อความ ด้วยหัวใจ 🌿',
    form_label_name: 'ชื่อของคุณ',
    form_placeholder_name: 'ชื่อ-นามสกุล',
    form_label_phone: 'เบอร์โทร / Line ID',
    form_placeholder_phone: '08X-XXX-XXXX',
    form_label_email: 'อีเมล',
    form_placeholder_email: 'your@email.com',
    form_label_type: 'ประเภท',
    form_select_default: '— เลือกประเภท —',
    form_select_inquiry: 'สอบถามสินค้า',
    form_select_custom: 'สั่งทำพิเศษ (Custom)',
    form_select_order: 'สั่งซื้อปกติ',
    form_select_other: 'อื่นๆ',
    form_label_message: 'ข้อความ',
    form_placeholder_message: 'เล่าให้เราฟังได้เลย…',
    contact_send: 'ส่งข้อความ →',
    contact_info_title: 'มาเยี่ยมเรา<br>ที่ร้านได้เลย',
    contact_info_address_label: 'ที่อยู่',
    contact_info_address: 'Kad Klang Wiang<br>71 Room 23-24, Ratchadamnoen Rd.<br>T. Phra Sing, A. Mueang<br>Chiang Mai 50200',
    contact_info_hours_label: 'เวลาทำการ',
    contact_info_hours: 'จันทร์ – อาทิตย์<br>10:00 – 20:30 น.',
    contact_info_phone_label: 'ติดต่อ',
    contact_info_social_label: 'ติดตามเรา',
    contact_line_cta: 'สั่งง่าย ตอบไว ผ่าน <strong>Line OA</strong> หรือ <strong style="color:#25D366">WhatsApp</strong>',
    line_btn_text: 'Line OA',
    wa_btn_text: 'WhatsApp',
    footer_text: '© Sweet Gypsy Design 2026 · เครื่องประดับทำมือ เชียงใหม่',
    footer_credit: 'Made with 💛 by <a href="#"></a>',
    hero_badge_title: 'Wear your story',
    hero_badge_subtitle: '"เพราะเครื่องประดับที่ดี คือสิ่งที่พูดแทนใจของผู้สวมใส่"',
    alert_order: ' ติดต่อสั่งซื้อผ่าน Line OA หรือ Instagram DM ของเราได้เลยค่ะ\n📱 Line: @sweetgypsy\n📸 IG: @sweetgypsys',
    alert_form: 'ขอบคุณนะคะ! เราจะติดต่อกลับภายใน 24 ชั่วโมง ',
    catalog_loading: 'กำลังโหลดสินค้า...',
    catalog_error: 'ไม่สามารถโหลดสินค้าได้ กรุณาลองใหม่อีกครั้ง',
    modal_wa_btn: 'สั่งซื้อผ่าน WhatsApp',
    modal_line_btn: 'สั่งซื้อผ่าน Line OA',
    modal_desc_default: 'เครื่องประดับทำมือจากเชียงใหม่ ทุกชิ้นสร้างด้วยมือและหัวใจ',
    collection_items: 'ชิ้น',
    collection_empty: 'เร็วๆ นี้…',
    tab_rings: 'แหวน',
    tab_necklace: 'สร้อยคอ',
    tab_earrings: 'ต่างหู',
    tab_bracelets: 'กำไล',
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
    col_desc: 'Every piece has a name, an origin, and a feeling woven in.<br>We don\'t just make beautiful things — we make \'things with heart\'',
    product_cat_1: 'Earrings',
    product_name_1: 'Whispers from Starlight',
    product_story_1: 'For nights when you need hope',
    product_price_1: '฿ 490 – 790',
    product_cat_2: 'Necklace',
    product_name_2: 'Flowers Survived the Storm',
    product_story_2: 'For days you rise again, even after you fall',
    product_price_2: '฿ 690 – 1,290',
    product_cat_3: 'Bracelets',
    product_name_3: 'Vine Embracing Heart',
    product_story_3: 'For love that\'s still beautiful, even when imperfect',
    product_price_3: '฿ 390 – 690',
    product_cat_4: 'Handmade Necklace',
    product_name_4: 'Winds of Remembrance',
    product_story_4: 'For days you wish to embrace someone far away',
    product_price_4: '฿ 590 – 990',
    product_overlay_btn: 'View Details',
    inspi_tag: 'My Inspiration',
    inspi_title: 'Every piece<em>has a story</em>',
    inspi_name_1: 'Whispers from Starlight',
    inspi_desc_1: 'Inspired by the coldest night, when the sky is still filled with stars. Sometimes hope hides in darkness.',
    inspi_link: 'View Collection',
    inspi_name_2: 'Flowers Survived the Storm',
    inspi_desc_2: 'Because the most beautiful flowers often bloom from the driest soil. Just like the strength of women who never give up.',
    inspi_name_3: 'Vine Embracing Heart',
    inspi_desc_3: 'Love doesn\'t need to be perfect to be beautiful. Sometimes the cracks are where light shines through.',
    rev_tag: 'Customer Reviews',
    rev_title: 'Words from <em>hearts</em> that wear us',
    review_text_1: '"Bought for my birthday. I love that each piece has meaning — it\'s nothing like regular jewelry."',
    review_author_1: 'Ploy K. ',
    review_location_1: 'Chiang Mai',
    review_text_2: '"Bought as a gift for my boyfriend. He loves it! Beautiful packaging and the owner replies so quickly."',
    review_author_2: 'Mint S. ',
    review_location_2: 'Bangkok',
    review_text_3: '"The work is so delicate. Everyone compliments it every time I wear it. Friends keep asking where to buy."',
    review_author_3: 'Fern T. ',
    review_location_3: 'Chiang Mai',
    story_tag: 'My Story',
    story_title: 'From brush<br><em>to jewelry</em>',
    story_p1: 'Sweet Gypsy was founded by a former art student passionate about creation, who believes dreams don\'t need to be perfect.',
    story_p2: 'From humble beginnings to a small sanctuary at Kad Klang Wiang in Chiang Mai — a place where hearts find refuge.',
    story_quote: 'We believe in the beauty of imperfection, and in the power of stories that are worn.',
    story_cta: 'Get in touch',
    how_tag: 'How to Order',
    how_title: 'Simple <em>4-step ordering</em>',
    step_1_title: 'Choose Your Piece',
    step_1_desc: 'Browse our Collections or reach out to ask about custom designs.',
    step_2_title: 'Contact Us',
    step_2_desc: 'Message us via Line OA or Instagram DM with the piece you\'d like.',
    step_3_title: 'Payment',
    step_3_desc: 'Send payment via PromptPay or QR Code. We accept all Thai banks.',
    step_4_title: 'Receive',
    step_4_desc: 'Pick up at Kad Klang Wiang or we\'ll ship nationwide via Kerry or Flash.',
    contact_title: 'Get in touch',
    contact_sub: 'Want to custom order, have questions, or just need someone to listen?<br>We\'re here to reply to every message with heart 🌿',
    form_label_name: 'Your Name',
    form_placeholder_name: 'First and Last Name',
    form_label_phone: 'Phone / Line ID',
    form_placeholder_phone: '08X-XXX-XXXX',
    form_label_email: 'Email',
    form_placeholder_email: 'your@email.com',
    form_label_type: 'Type',
    form_select_default: '— Select Type —',
    form_select_inquiry: 'Product Inquiry',
    form_select_custom: 'Custom Order',
    form_select_order: 'Regular Order',
    form_select_other: 'Other',
    form_label_message: 'Message',
    form_placeholder_message: 'Tell us what\'s on your mind…',
    contact_send: 'Send message →',
    contact_info_title: 'Visit us<br>at the shop',
    contact_info_address_label: 'Address',
    contact_info_address: 'Kad Klang Wiang<br>71 Room 23-24, Ratchadamnoen Rd.<br>T. Phra Sing, A. Mueang<br>Chiang Mai 50200',
    contact_info_hours_label: 'Hours',
    contact_info_hours: 'Monday – Sunday<br>10:00 – 20:30',
    contact_info_phone_label: 'Contact',
    contact_info_social_label: 'Follow Us',
    contact_line_cta: 'Order easily, fast replies via <strong>Line OA</strong> or <strong style="color:#25D366">WhatsApp</strong>',
    line_btn_text: 'Line OA',
    wa_btn_text: 'WhatsApp',
    footer_text: '© Sweet Gypsy Design 2026 · Handmade Jewelry from Chiang Mai',
    footer_credit: 'Made with 💛 by <a href="#">  </a>',
    hero_badge_title: 'Wear your story',
    hero_badge_subtitle: '"Because good jewelry is what speaks for the wearer\'s heart"',
    alert_order: ' Contact us via Line OA or Instagram DM\n📱 Line: @sweetgypsy\n📸 IG: @sweetgypsys',
    alert_form: 'Thank you! We will get back to you within 24 hours ',
    catalog_loading: 'Loading products...',
    catalog_error: 'Unable to load products. Please try again.',
    modal_wa_btn: 'Order via WhatsApp',
    modal_line_btn: 'Order via Line OA',
    modal_desc_default: 'Handmade jewelry from Chiang Mai — every piece crafted by hand with heart.',
    collection_items: 'items',
    collection_empty: 'Coming soon…',
    tab_rings: 'Rings',
    tab_necklace: 'Necklace',
    tab_earrings: 'Earrings',
    tab_bracelets: 'Bracelets',
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
    col_desc: '每件作品都有名字、来源和蕴含的情感。<br>我们不只是制作美物——我们制作"有心意的物品"',
    product_cat_1: '耳环',
    product_name_1: '星光的低语',
    product_story_1: '为那些需要希望的夜晚',
    product_price_1: '฿ 490 – 790',
    product_cat_2: '项链',
    product_name_2: '雨中绽放的花',
    product_story_2: '为那些跌倒后再站起的日子',
    product_price_2: '฿ 690 – 1,290',
    product_cat_3: '手镯',
    product_name_3: '藤蔓拥抱心灵',
    product_story_3: '为那些不完美却依然美好的爱',
    product_price_3: '฿ 390 – 690',
    product_cat_4: '手工项链',
    product_name_4: '记忆中的风',
    product_story_4: '为那些想要拥抱远方之人的日子',
    product_price_4: '฿ 590 – 990',
    product_overlay_btn: '查看详情',
    inspi_tag: '灵感来源',
    inspi_title: '每件作品<em>都有故事</em>',
    inspi_name_1: '星光的低语',
    inspi_desc_1: '灵感源自最寒冷的夜晚，当天空仍然布满星星。有时希望隐藏在黑暗中。',
    inspi_link: '浏览系列',
    inspi_name_2: '雨中绽放的花',
    inspi_desc_2: '因为最美的花往往从最干旱的土壤中绽放。就像从不放弃的女性的力量。',
    inspi_name_3: '藤蔓拥抱心灵',
    inspi_desc_3: '爱不需要完美就能美好。有时裂缝就是光照进来的地方。',
    rev_tag: '顾客评价',
    rev_title: '来自<em>佩戴者</em>的心声',
    review_text_1: '"为自己买的生日礼物。很喜欢每件都有意义——完全不同于普通珠宝。"',
    review_author_1: '微微 ',
    review_location_1: '清迈',
    review_text_2: '"买来送给男友。他很喜欢！包装很漂亮，老板娘回复也很快。"',
    review_author_2: '敏敏 ',
    review_location_2: '曼谷',
    review_text_3: '"手工太精致了。每次穿都被夸。朋友一直问在哪买的。"',
    review_author_3: '蕨蕨 ',
    review_location_3: '清迈',
    story_tag: '我的故事',
    story_title: '从画笔<br><em>到珠宝</em>',
    story_p1: '甜蜜吉普赛由一位对创作充满热情的前美术学生创立，她相信梦想无需完美。',
    story_p2: '从微不足道的开始，到清迈康康广场的小小避风港——一个让心灵得到休息的地方。',
    story_quote: '我们相信不完美的美，和被穿在身上的故事的力量。',
    story_cta: '联系我们',
    how_tag: '购买方式',
    how_title: '简单 <em>4步下单</em>',
    step_1_title: '选择作品',
    step_1_desc: '浏览我们的系列或与我们联系咨询定制设计。',
    step_2_title: '联系我们',
    step_2_desc: '通过 Line OA 或 Instagram DM 告诉我们您想要的作品。',
    step_3_title: '支付',
    step_3_desc: '通过 PromptPay 或二维码转账。我们接受所有泰国银行。',
    step_4_title: '领取',
    step_4_desc: '在康康广场取货或我们将通过 Kerry 或 Flash 全泰配送。',
    contact_title: '联系我们',
    contact_sub: '想要定制、有疑问，还是只是需要有人倾听?<br>我们随时准备用心回复每条消息 🌿',
    form_label_name: '您的名字',
    form_placeholder_name: '名字和姓氏',
    form_label_phone: '电话 / Line ID',
    form_placeholder_phone: '08X-XXX-XXXX',
    form_label_email: '电子邮件',
    form_placeholder_email: 'your@email.com',
    form_label_type: '类型',
    form_select_default: '— 选择类型 —',
    form_select_inquiry: '产品咨询',
    form_select_custom: '定制订单',
    form_select_order: '常规订单',
    form_select_other: '其他',
    form_label_message: '消息',
    form_placeholder_message: '告诉我们您的想法…',
    contact_send: '发送消息 →',
    contact_info_title: '来店里<br>看我们',
    contact_info_address_label: '地址',
    contact_info_address: 'Kad Klang Wiang<br>71 Room 23-24, Ratchadamnoen Rd.<br>T. Phra Sing, A. Mueang<br>Chiang Mai 50200',
    contact_info_hours_label: '营业时间',
    contact_info_hours: '周一 – 周日<br>10:00 – 20:30',
    contact_info_phone_label: '联系方式',
    contact_info_social_label: '关注我们',
    contact_line_cta: '通过 <strong>Line OA</strong> 或 <strong style="color:#25D366">WhatsApp</strong> 轻松订购，快速回复',
    line_btn_text: 'Line OA',
    wa_btn_text: 'WhatsApp',
    footer_text: '© Sweet Gypsy Design 2026 · 清迈手工珠宝',
    footer_credit: 'Made with 💛 by <a href="#"> </a>',
    hero_badge_title: '穿上你的故事',
    hero_badge_subtitle: '"因为好的珠宝就是穿戴者心声的诠释"',
    alert_order: ' 请通过 Line OA 或 Instagram DM 联系我们\n📱 Line: @sweetgypsy\n📸 IG: @sweetgypsys',
    alert_form: '谢谢您！我们将在24小时内回复 ',
    catalog_loading: '正在加载商品...',
    catalog_error: '无法加载商品，请重试。',
    modal_wa_btn: '通过 WhatsApp 订购',
    modal_line_btn: '通过 Line OA 订购',
    modal_desc_default: '来自清迈的手工珠宝——每件作品都用双手和心灵制作。',
    collection_items: '件',
    collection_empty: '即将推出…',
    tab_rings: '戒指',
    tab_necklace: '项链',
    tab_earrings: '耳环',
    tab_bracelets: '手镯',
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
    col_desc: 'すべての作品には名前、起源、そして織り込まれた感情があります。<br>私たちは美しいものを作るだけではなく、"心のこもったもの"を作ります',
    product_cat_1: 'ピアス',
    product_name_1: '星明かりのささやき',
    product_story_1: '希望が必要な夜のために',
    product_price_1: '฿ 490 – 790',
    product_cat_2: 'ネックレス',
    product_name_2: '嵐を乗り越えた花',
    product_story_2: '転んでもまた立ち上がる日のために',
    product_price_2: '฿ 690 – 1,290',
    product_cat_3: 'ブレスレット',
    product_name_3: 'つるが心を抱く',
    product_story_3: '不完全でもなお美しい愛のために',
    product_price_3: '฿ 390 – 690',
    product_cat_4: 'ハンドメイドネックレス',
    product_name_4: '思い出の風',
    product_story_4: '遠くにいる誰かを抱きしめたい日のために',
    product_price_4: '฿ 590 – 990',
    product_overlay_btn: '詳細を見る',
    inspi_tag: '私のインスピレーション',
    inspi_title: 'すべての作品<em>にストーリーがある</em>',
    inspi_name_1: '星明かりのささやき',
    inspi_desc_1: '最も寒い夜、それでも空は星で満ちている。ときに希望は暗闇に隠れている。',
    inspi_link: 'コレクションを見る',
    inspi_name_2: '嵐を乗り越えた花',
    inspi_desc_2: '最も美しい花は最も乾いた土から咲く。決して諦めない女性の強さのように。',
    inspi_name_3: 'つるが心を抱く',
    inspi_desc_3: '愛は完璧である必要はなく、美しくある。ときにひび割れたところから光が差し込む。',
    rev_tag: 'お客様レビュー',
    rev_title: '身に纏う<em>心の声</em>',
    review_text_1: '"誕生日に自分へのプレゼント。各作品に意味があるのが大好き。普通のジュエリーとは全く違います。"',
    review_author_1: 'プロイ ',
    review_location_1: 'チェンマイ',
    review_text_2: '"彼へのギフトで購入。彼がとても喜んでくれました！パッケージが素敵でオーナーの対応も早い。"',
    review_author_2: 'ミント ',
    review_location_2: 'バンコク',
    review_text_3: '"手作業がとても丁寧。毎回褒めてもらえます。友人が何度も「どこで買ったの?」と聞いてきます。"',
    review_author_3: 'ファーン ',
    review_location_3: 'チェンマイ',
    story_tag: '私のストーリー',
    story_title: '絵筆から<br><em>ジュエリーへ</em>',
    story_p1: 'Sweet Gypsyは、創作に情熱を持つ元美術学生によって創立されました。彼女は夢は完璧である必要がないと信じています。',
    story_p2: '始まりからチェンマイのカドクラングウィアン小店まで——心が休まる場所になれるように。',
    story_quote: '私たちは不完全の美しさ、そして身に纏われる物語の力を信じています。',
    story_cta: 'お問い合わせ',
    how_tag: 'ご注文方法',
    how_title: '簡単 <em>4ステップ注文</em>',
    step_1_title: 'ピースを選ぶ',
    step_1_desc: 'コレクションを閲覧するか、カスタムデザインについてお問い合わせください。',
    step_2_title: 'ご連絡ください',
    step_2_desc: 'Line OAまたはInstagram DMで、ご希望のピースをお知らせください。',
    step_3_title: 'お支払い',
    step_3_desc: 'PromptPayまたはQRコードでお支払いください。すべてのタイの銀行をご利用いただけます。',
    step_4_title: 'お受け取り',
    step_4_desc: 'カドクラングウィアンでお受け取りいただくか、Kerry/Flashで全国配送いたします。',
    contact_title: 'お問い合わせ',
    contact_sub: 'カスタムオーダーをお考えですか、ご質問がありますか、それとも話し相手が必要ですか?<br>すべてのメッセージに心を込めてお返事します 🌿',
    form_label_name: 'お名前',
    form_placeholder_name: '名前と苗字',
    form_label_phone: '電話 / Line ID',
    form_placeholder_phone: '08X-XXX-XXXX',
    form_label_email: 'メールアドレス',
    form_placeholder_email: 'your@email.com',
    form_label_type: 'タイプ',
    form_select_default: '— タイプを選択 —',
    form_select_inquiry: '商品についてのお問い合わせ',
    form_select_custom: 'カスタムオーダー',
    form_select_order: '通常オーダー',
    form_select_other: 'その他',
    form_label_message: 'メッセージ',
    form_placeholder_message: 'ご考察をお聞かせください…',
    contact_send: 'メッセージを送る →',
    contact_info_title: '直接会いに来てください<br>お店へ',
    contact_info_address_label: 'アドレス',
    contact_info_address: 'Kad Klang Wiang<br>71 Room 23-24, Ratchadamnoen Rd.<br>T. Phra Sing, A. Mueang<br>Chiang Mai 50200',
    contact_info_hours_label: '営業時間',
    contact_info_hours: '月 – 日<br>10:00 – 20:30',
    contact_info_phone_label: 'お問い合わせ',
    contact_info_social_label: 'フォローしてください',
    contact_line_cta: '<strong>Line OA</strong>または<strong style="color:#25D366">WhatsApp</strong>で簡単注文、素早い返信',
    line_btn_text: 'Line OA',
    wa_btn_text: 'WhatsApp',
    footer_text: '© Sweet Gypsy Design 2026 · チェンマイ ハンドメイドジュエリー',
    footer_credit: 'Made with 💛 by <a href="#"> </a>',
    hero_badge_title: 'あなたの物語を纏う',
    hero_badge_subtitle: '"良い宝石こそが、身に纏う者の心を語っている"',
    alert_order: ' Line OAまたはInstagram DMでお問い合わせください\n📱 Line: @sweetgypsy\n📸 IG: @sweetgypsys',
    alert_form: 'ありがとうございます！24時間以内にご返信いたします ',
    catalog_loading: '商品を読み込み中...',
    catalog_error: '商品を読み込めませんでした。もう一度お試しください。',
    modal_wa_btn: 'WhatsAppで注文',
    modal_line_btn: 'Line OAで注文',
    modal_desc_default: 'チェンマイのハンドメイドジュエリー — すべての作品は手と心で作られています。',
    collection_items: '点',
    collection_empty: '近日公開…',
    tab_rings: 'リング',
    tab_necklace: 'ネックレス',
    tab_earrings: 'ピアス',
    tab_bracelets: 'ブレスレット',
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

  // Update form labels and placeholders with data-i18n-label and data-i18n-placeholder
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-label');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update select options
  document.querySelectorAll('[data-i18n-options]').forEach(select => {
    const optionKeys = select.getAttribute('data-i18n-options').split(',');
    Array.from(select.options).forEach((option, index) => {
      if (optionKeys[index] && t[optionKeys[index]] !== undefined) {
        option.textContent = t[optionKeys[index]];
      }
    });
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

  // Update html class for font switching
  document.documentElement.className = `lang-${lang}`;

  // Re-render dynamic catalog in new language (if loaded)
  if (typeof renderCatalog === 'function' && cachedSheetRows) {
    renderCatalog();
  }
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

/* ─── PRODUCT CARD BUTTONS (static fallback cards) ─── */
function initProductCards() {
  document.querySelectorAll('.product-overlay-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // If this card has sheet data attached, open modal instead
      const card = e.target.closest('.product-card');
      if (card && card.dataset.sheetProduct) {
        try {
          const product = JSON.parse(card.dataset.sheetProduct);
          openProductModal(product);
        } catch (err) {
          console.error('[CARD] Failed to parse product data', err);
        }
        return;
      }
      // Fallback: show alert for static cards
      const t = i18n[currentLang];
      alert(t ? t.alert_order : i18n.en.alert_order);
    });
  });
}

/* ─── CONTACT FORM & ANTI-SPAM ─── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusMsg = document.getElementById('form-status-msg');
  const submitBtn = document.getElementById('btn-submit');
  if (!form || !statusMsg || !submitBtn) return;

  // Rate Limiter: Max 3 messages per 24 hours
  const MAX_MSGS = 3;
  const TIME_FRAME = 24 * 60 * 60 * 1000; // 24 hours in ms

  function checkRateLimit() {
    const history = JSON.parse(localStorage.getItem('contactFormHistory') || '[]');
    const now = Date.now();
    // Filter history to only include messages from the last 24 hours
    const recent = history.filter(time => now - time < TIME_FRAME);
    return recent.length < MAX_MSGS;
  }

  function recordSubmission() {
    const history = JSON.parse(localStorage.getItem('contactFormHistory') || '[]');
    const now = Date.now();
    const recent = history.filter(time => now - time < TIME_FRAME);
    recent.push(now);
    localStorage.setItem('contactFormHistory', JSON.stringify(recent));
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Check honeypot
    const honey = form.elements['_honey']?.value;
    if (honey) {
      // Bot filled the hidden field, silently reject
      statusMsg.style.display = 'block';
      statusMsg.style.backgroundColor = '#d4edda';
      statusMsg.style.color = '#155724';
      statusMsg.textContent = 'Message sent successfully!'; // Fake success for bots
      return;
    }

    if (!checkRateLimit()) {
      statusMsg.style.display = 'block';
      statusMsg.style.backgroundColor = '#f8d7da';
      statusMsg.style.color = '#721c24';
      const t = i18n[currentLang];
      statusMsg.textContent = t ? (t.form_limit_error || 'You have reached the daily limit for sending messages. Please try again tomorrow.') : 'You have reached the daily limit for sending messages. Please try again tomorrow.';
      return;
    }

    const formData = new FormData(form);

    // Disable button to prevent double submit
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    statusMsg.style.display = 'none';

    fetch('https://formsubmit.co/ajax/diffunnogoodguy1945@gmail.com', {
      method: 'POST',
      body: formData
      // ห้ามใส่ headers ใด ๆ ทั้งสิ้น ปล่อยโล่งแบบนี้เลยครับ เบราว์เซอร์จะจัดการส่งคู่ FormData ให้เอง
    })
      .then(response => {
        if (!response.ok) {
          // ถ้าเซิร์ฟเวอร์ตอบกลับมาว่าไม่ผ่าน (เช่น URL ผิด หรือไม่มีข้อมูล) ให้โยนข้อผิดพลาดออกไป
          throw new Error('เซิร์ฟเวอร์ปฏิเสธการส่งข้อมูล');
        }
        return response.json();
      })
      .then(data => {
        if (data.success === 'true' || data.success === true) {
          statusMsg.style.display = 'block';
          statusMsg.style.backgroundColor = '#d4edda';
          statusMsg.style.color = '#155724';
          statusMsg.textContent = 'ส่งข้อมูลสำเร็จแล้ว! สังเกตกล่องข้อความอีเมลของคุณเพื่อกดยืนยัน (Activate) ครั้งแรกด้วยนะคะ';
          form.reset();
          recordSubmission();
        } else if (data.message && data.message.toLowerCase().includes('activation')) {
          // ── Formsubmit ต้องการ Activate ครั้งแรก (ปกติ ไม่ใช่ error) ──
          statusMsg.style.display = 'block';
          statusMsg.style.backgroundColor = '#fff3cd';
          statusMsg.style.color = '#856404';
          statusMsg.innerHTML = '📧 <strong>เหลืออีก 1 ขั้นตอน!</strong><br>ระบบส่งอีเมลยืนยันไปแล้ว กรุณาเปิดอีเมลแล้วกดปุ่ม <strong>"Activate Form"</strong><br>หลังจากนั้นฟอร์มจะใช้งานได้ตลอดเลยค่ะ!';
        } else {
          throw new Error('Server returned false');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        statusMsg.style.display = 'block';
        statusMsg.style.backgroundColor = '#f8d7da';
        statusMsg.style.color = '#721c24';
        statusMsg.textContent = 'เกิดข้อผิดพลาด: มีปัญหาบนหน้าเว็บ ไม่สามารถส่งข้อมูลได้ กรุณาเช็กชื่อคอลัมน์และอินเทอร์เน็ต';
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
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

/* ============================================================
   GOOGLE SHEETS CATALOG INTEGRATION
   (ported from Web-test02/files/js/main.js)
   ============================================================ */

const SHEET_ID = '1Al60xA21jSCWvyqvgQeSxVhyPeU71ADsYLzZPbLQpys';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

// Cached sheet data for re-rendering on language change
let cachedSheetRows = null;
let cachedImgColIndex = 6;

/* ─── IMAGE UTILITIES ─── */
function optimizeImageURL(imageUrl, productId) {
  if (!imageUrl || typeof imageUrl !== 'string') return '';
  // Cloudinary auto-format: serve best format (WebP/AVIF) & quality
  if (imageUrl.includes('cloudinary.com') && !imageUrl.includes('f_auto')) {
    imageUrl = imageUrl.replace('/upload/', '/upload/f_auto,q_auto/');
  }
  if (imageUrl.startsWith('data:') || imageUrl.startsWith('http')) return imageUrl;
  return imageUrl;
}

function setupImageError(imgElement, productId) {
  imgElement.addEventListener('error', function () {
    console.warn(`[IMG] Failed to load: ${productId}`);
    this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+PC9zdmc+';
    this.classList.add('image-error');
  });
}

/* ─── DETECT IMAGE COLUMN ─── */
function detectImageColumn(rows) {
  if (!rows || rows.length === 0) return 6;
  const firstRow = rows[0].c;
  for (let i = 0; i < firstRow.length; i++) {
    const val = firstRow[i]?.v || '';
    if (typeof val === 'string' && (val.includes('http') || val.includes('data:image'))) {
      return i;
    }
  }
  return 6;
}

/* ============================================================
   CATEGORY DEFINITIONS — 4 product types
   Now driven by the "Catalog_Type" column (Col F) in Google Sheets
   ============================================================ */

const CATEGORIES = [
  {
    id: 'rings',
    keywords: ['ring', 'แหวน'],
    names: { en: 'Rings', th: 'แหวน', zh: '戒指', ja: 'リング' },
    ph: 'ph-2'
  },
  {
    id: 'necklace',
    names: { en: 'Necklace', th: 'สร้อยคอ', zh: '项链', ja: 'ネックレス' },
    ph: 'ph-3'
  },
  {
    id: 'earrings',
    names: { en: 'Earrings', th: 'ต่างหู', zh: '耳环', ja: 'ピアス' },
    ph: 'ph-4'
  },
  {
    id: 'bracelets',
    names: { en: 'Bracelets', th: 'กำไล', zh: '手镯', ja: 'ブレスレット' },
    ph: 'ph-5'
  }
];

/* ─── DM LINK GENERATORS — based on DM_Type column (Col G) ─── */
const DM_LINKS = {
  line: (product) => `https://line.me/ti/p/~@sweetgypsy`,
  whatsapp: (product) => {
    const msg = currentLang === 'th'
      ? `สวัสดีค่ะ สนใจสินค้า: ${product.name} (รหัส: ${product.id})`
      : `Hello, I'm interested in: ${product.name} (ID: ${product.id})`;
    return `https://wa.me/66645195663?text=${encodeURIComponent(msg)}`;
  },
  instagram: (product) => `https://ig.me/m/sweetgypsys`,
  facebook: (product) => `https://m.me/sweetgypsyth`
};

/** Returns the primary DM link URL for a product based on its DM_Type */
function getDmLink(product) {
  const type = (product.dmType || 'whatsapp').toLowerCase().trim();
  const generator = DM_LINKS[type] || DM_LINKS.whatsapp;
  return generator(product);
}

/* ─── NORMALIZE Catalog_Type VALUE FROM SHEET ─── */
function normalizeCatalogType(raw) {
  if (!raw) return null;
  // Strip zero-width spaces and trim
  const cleaned = raw.replace(/[\u200B-\u200D\uFEFF]/g, '').trim().toLowerCase();
  // Match against known category IDs
  const match = CATEGORIES.find(cat => cat.id === cleaned);
  return match ? match.id : null;
}

/* ─── GET CATEGORY DISPLAY NAME ─── */
function getCategoryName(cat) {
  return cat.names[currentLang] || cat.names.en;
}

/* ─── BUILD A SINGLE PRODUCT CARD HTML ─── */
function buildProductCard(product) {
  const t = i18n[currentLang] || i18n.en;
  const viewBtnText = t.product_overlay_btn || 'View Details';
  const safeData = JSON.stringify(product).replace(/'/g, '&#39;').replace(/"/g, '&quot;');

  const imgHTML = product.image
    ? `<img src="${product.image}" alt="${product.name}" class="product-img-dynamic" loading="lazy" data-product-id="${product.id}">`
    : `<div class="img-ph ${product.ph || 'ph-2'}">${product.name}</div>`;

  return `
    <div class="product-card" data-sheet-product="${safeData}">
      <div class="product-img-wrap">
        ${imgHTML}
        <div class="product-overlay">
          <button class="product-overlay-btn">${viewBtnText}</button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-cat">${product.category || ''}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price} THB</p>
      </div>
    </div>
  `;
}

/* ─── PARSE ROW INTO PRODUCT OBJECT ─── */
function parseProductRow(row, index, imgColIndex) {
  // Sheet structure: Col0=ID, Col1=NAME, Col2=PRICE, Col3=ImageURL,
  //                 Col4=Description, Col5=Catalog_Type, Col6=DM_Type
  const id = row.c[0]?.v?.toString() || `product-${index}`;
  const name = row.c[1]?.v || '';
  const price = row.c[2]?.v || 'N/A';
  const image = optimizeImageURL(row.c[3]?.v, id);
  const desc = row.c[4]?.v || '';
  const dmType = row.c[6]?.v || 'whatsapp';

  // Use Catalog_Type column (Col F / index 5) from the sheet
  const rawCatalogType = row.c[5]?.v || '';
  const catId = normalizeCatalogType(rawCatalogType);
  const catObj = CATEGORIES.find(c => c.id === catId);
  const category = catObj ? getCategoryName(catObj) : '';

  return {
    id, name, price, desc, image, category,
    catId: catId || 'other',
    ph: catObj ? catObj.ph : 'ph-2',
    dmType: dmType,
    story: ''
  };
}

/* ─── BUILD A CATEGORY COLUMN ─── */
function buildCategoryColumn(cat, products) {
  const t = i18n[currentLang] || i18n.en;
  const catName = getCategoryName(cat);
  const itemWord = t.collection_items || 'items';

  let cardsHTML = '';
  if (products.length > 0) {
    cardsHTML = products.map(p => buildProductCard(p)).join('');
  } else {
    cardsHTML = `<div class="collection-empty">${t.collection_empty || 'Coming soon…'}</div>`;
  }

  return `
    <div class="collection-column" data-category="${cat.id}">
      <div class="collection-column-header">
        <span class="col-type-sub">COLLECTION</span>
        <h3>${catName}</h3>
        <span class="col-count">${products.length} ${itemWord}</span>
      </div>
      <div class="collection-column-items">
        ${cardsHTML}
      </div>
    </div>
  `;
}

/* ─── RENDER CATALOG: FILTER BY Catalog_Type INTO 4 COLUMNS ─── */
function renderCatalog() {
  if (!cachedSheetRows) return;

  const container = document.getElementById('collections-columns');
  if (!container) return;

  // Parse all products from sheet rows
  const allProducts = [];
  cachedSheetRows.forEach((row, index) => {
    try {
      allProducts.push(parseProductRow(row, index, cachedImgColIndex));
    } catch (e) {
      console.error(`[CATALOG] Row ${index} failed:`, e);
    }
  });

  // ── USE .filter() TO SEPARATE PRODUCTS BY Catalog_Type ──
  const grouped = {};
  CATEGORIES.forEach(cat => {
    grouped[cat.id] = allProducts.filter(p => p.catId === cat.id);
  });

  // Collect uncategorized products (Catalog_Type didn't match any known category)
  const uncategorized = allProducts.filter(p => p.catId === 'other');
  if (uncategorized.length > 0) {
    console.warn(`[CATALOG] ${uncategorized.length} product(s) have no matching Catalog_Type — distributing round-robin`);
    uncategorized.forEach((product, i) => {
      const targetCat = CATEGORIES[i % CATEGORIES.length];
      product.category = getCategoryName(targetCat);
      product.catId = targetCat.id;
      grouped[targetCat.id].push(product);
    });
  }

  // Build 4 category columns
  let columnsHTML = '';
  CATEGORIES.forEach((cat, idx) => {
    const isActive = idx === 0 ? ' active' : '';
    const columnStr = buildCategoryColumn(cat, grouped[cat.id]);
    columnsHTML += columnStr.replace('class="collection-column"', `class="collection-column${isActive}"`);
  });

  container.innerHTML = columnsHTML;

  // Setup image error handlers
  container.querySelectorAll('.product-img-dynamic').forEach(img => {
    setupImageError(img, img.dataset.productId);
  });

  // Re-attach click handlers
  initProductCards();

  // Log summary per category
  const summary = CATEGORIES.map(c => `${c.id}: ${grouped[c.id].length}`).join(', ');
  console.log(`[CATALOG] ✓ Rendered ${allProducts.length} products → ${summary}`);
}

/* ─── FETCH CATALOG FROM GOOGLE SHEETS ─── */
async function fetchCatalog() {
  const container = document.getElementById('collections-columns');
  const t = i18n[currentLang] || i18n.en;

  try {
    console.log('[CATALOG] Fetching from Google Sheets...');
    const response = await fetch(SHEET_URL);
    const text = await response.text();
    const jsonData = JSON.parse(text.substring(47, text.length - 2));
    const rows = jsonData.table.rows;

    console.log(`[CATALOG] ✓ Loaded ${rows.length} products`);

    // Cache for language switching
    cachedSheetRows = rows;
    cachedImgColIndex = detectImageColumn(rows);

    // Render the catalog
    renderCatalog();

  } catch (error) {
    console.error('[CATALOG] Error fetching:', error);
    if (container) {
      container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:2rem 0;">${t.catalog_error || 'Unable to load products.'}</p>`;
    }
  }
}

/* ============================================================
   PRODUCT DETAIL MODAL
   ============================================================ */

function openProductModal(product) {
  const overlay = document.getElementById('product-modal-overlay');
  if (!overlay) return;

  const t = i18n[currentLang] || i18n.en;

  // Populate modal
  document.getElementById('modal-cat').textContent = product.category || '';
  document.getElementById('modal-name').textContent = product.name || '';
  document.getElementById('modal-story').textContent = product.story || '';
  document.getElementById('modal-price').textContent = product.price ? `${product.price} THB` : '';
  document.getElementById('modal-desc').textContent = product.desc || t.modal_desc_default || '';

  // Image
  const modalImg = document.getElementById('modal-img');
  if (product.image) {
    modalImg.src = product.image;
    modalImg.alt = product.name;
    setupImageError(modalImg, product.id);
  } else {
    modalImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';
  }

  // ── Dynamic DM link based on DM_Type column from Google Sheet ──
  const dmLink = getDmLink(product);
  const dmType = (product.dmType || 'whatsapp').toLowerCase().trim();

  // WhatsApp button — always uses WhatsApp link
  const waMsg = currentLang === 'th'
    ? `สวัสดีค่ะ สนใจสั่งซื้อสินค้า: ${product.name} (รหัส: ${product.id})`
    : `Hello, I'm interested in ordering: ${product.name} (ID: ${product.id})`;
  document.getElementById('modal-wa-btn').href = `https://wa.me/66645195663?text=${encodeURIComponent(waMsg)}`;

  // Line button — uses the DM_Type link if it's line/ig/fb, otherwise default Line
  const lineBtn = document.getElementById('modal-line-btn');
  if (dmType === 'instagram') {
    lineBtn.href = DM_LINKS.instagram(product);
  } else if (dmType === 'facebook') {
    lineBtn.href = DM_LINKS.facebook(product);
  } else {
    lineBtn.href = DM_LINKS.line(product);
  }

  // Show modal
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const overlay = document.getElementById('product-modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function initModal() {
  const overlay = document.getElementById('product-modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeProductModal);
  }
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeProductModal();
    });
  }
  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });
}

/* ─── COLLECTION TAB SWITCHING ─── */
function initCollectionTabs() {
  const tabs = document.querySelectorAll('.collection-tab[data-tab]');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      // Update active tab styling
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const catId = tab.getAttribute('data-tab');

      // Update active column visibility
      const columns = document.querySelectorAll('.collection-column');
      columns.forEach(col => {
        if (col.getAttribute('data-category') === catId) {
          col.classList.add('active');
        } else {
          col.classList.remove('active');
        }
      });
    });
  });
}

/* ─── INIT ON DOM READY ─── */
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initProductCards();
  // initContactForm(); // ← Disabled: now handled by web3forms-handler.js
  initHamburger();
  initModal();
  initCollectionTabs();
  applyLang('en'); // default language

  // Fetch real product data from Google Sheets
  fetchCatalog();
});