/* pramaan parents v0.1
   A sample week of evening notes. All content is hard-coded sample data.
   Nothing is fetched, sent or collected. localStorage keeps only theme, language and the day you were on. */
(function () {
  'use strict';

  var LANG_KEY = 'pramaan-parents-lang';
  var DAY_KEY = 'pramaan-parents-day';

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  /* ---------- interface copy ---------- */
  var UI = {
    en: {
      wordmark: 'pramaan <em>parents</em>',
      langGroup: 'language',
      theme: 'theme',
      sampleStamp: 'sample',
      sampleNote: 'sample data. meera is not a real child, and nothing on this page is sent anywhere.',
      h1: 'a week of <em>meera</em>',
      dek: 'what a parent would get from pramaan each evening: one short note with what their child asked today, one question for dinner, and how effort and self-belief moved. meera is a sample child, twelve, in bengaluru.',
      threadTitle: 'pramaan · meera\'s evening note',
      dayOf: 'day',
      chooseDay: 'choose a day',
      from: 'pramaan',
      greet: 'good evening. here is meera\'s {day}.',
      asked: 'what meera asked today',
      dinner: 'one question for dinner',
      why: 'why this one',
      trend: 'effort and self-belief, this week',
      effort: 'effort',
      belief: '"i can figure this out"',
      first: 'first day of the week',
      up: 'higher than monday',
      same: 'same as monday',
      down: 'lower than monday',
      weekCount: 'questions this week',
      prev: '← previous day',
      next: 'next day →',
      endLine: 'that was the week. would a note like this be worth a monthly fee to you?',
      endCta: 'join the waitlist →',
      earlier: 'earlier this week',
      chartLabel: 'effort and self-belief from monday to {day}, each out of five',
      howLabel: 'how to read a note',
      how1t: 'what she asked',
      how1b: 'her own questions, in her words, from the day\'s sessions at pramaan. no question is marked good or bad; asking is the point.',
      how2t: 'one question for dinner',
      how2b: 'built from what she asked, so the talk starts where her curiosity already is. ask it, then listen a little longer than feels natural.',
      how3t: 'effort and self-belief',
      how3b: 'two taps meera makes at the end of each session: how hard she tried, and how sure she feels that she can figure things out. the psychologist albert bandura called that second feeling self-efficacy; it grows more from small wins a child notices herself than from praise. the line is hers to draw, never a grade.',
      how4t: 'where it lives',
      how4b: 'in the real version, the note is put together on the family\'s own device. nothing about meera goes to a server, and she is never compared with other children.',
      waitLabel: 'waitlist',
      waitH2: 'get a week of <em>notes</em>',
      waitDek: 'this form stores nothing and sends nothing. it only shows what would happen.',
      waitLegend: 'about you',
      fName: 'your first name',
      fAge: 'your child\'s age',
      fChoose: 'choose',
      age1: '6 to 8', age2: '9 to 11', age3: '12 to 14',
      fCity: 'city',
      fCityPh: 'bengaluru',
      fLang: 'language for the notes',
      fSubmit: 'join the waitlist',
      fReset: 'start over',
      needName: 'add your first name and your child\'s age to see what would happen.',
      langIn: { en: 'english', hi: 'hindi', kn: 'kannada' },
      result: 'nothing was saved or sent; in the real version, {name}, you would get a one-line hello from pramaan in {lang}, then seven evening notes about your child aged {age}, and you could turn them off at any time.',
      map1: 'the week', map2: 'how to read a note', map3: 'waitlist', map4: 'source',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      short: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    },
    hi: {
      wordmark: 'प्रमाण <em>अभिभावक</em>',
      langGroup: 'भाषा',
      theme: 'थीम',
      sampleStamp: 'नमूना',
      sampleNote: 'नमूना डेटा। मीरा असली बच्ची नहीं है, और इस पेज से कुछ भी कहीं नहीं भेजा जाता।',
      h1: 'मीरा का <em>एक हफ़्ता</em>',
      dek: 'हर शाम प्रमाण से माता-पिता को यही मिलेगा: एक छोटा संदेश, जिसमें होगा कि आज बच्चे ने क्या पूछा, खाने की मेज़ के लिए एक सवाल, और मेहनत व आत्मविश्वास में क्या बदला। मीरा एक नमूना बच्ची है, बारह साल की, बेंगलुरु में।',
      threadTitle: 'प्रमाण · मीरा का शाम का संदेश',
      dayOf: 'दिन',
      chooseDay: 'दिन चुनें',
      from: 'प्रमाण',
      greet: 'शुभ संध्या। मीरा का {day} कुछ ऐसा रहा।',
      asked: 'आज मीरा ने पूछा',
      dinner: 'खाने की मेज़ के लिए एक सवाल',
      why: 'यही सवाल क्यों',
      trend: 'इस हफ़्ते मेहनत और आत्मविश्वास',
      effort: 'मेहनत',
      belief: '"मैं यह समझ लूँगी"',
      first: 'हफ़्ते का पहला दिन',
      up: 'सोमवार से ज़्यादा',
      same: 'सोमवार जितना',
      down: 'सोमवार से कम',
      weekCount: 'इस हफ़्ते के सवाल',
      prev: '← पिछला दिन',
      next: 'अगला दिन →',
      endLine: 'यह रहा पूरा हफ़्ता। क्या ऐसा संदेश आपके लिए हर महीने शुल्क देने लायक होगा?',
      endCta: 'प्रतीक्षा सूची में जुड़ें →',
      earlier: 'इस हफ़्ते पहले',
      chartLabel: 'सोमवार से {day} तक मेहनत और आत्मविश्वास, पाँच में से',
      howLabel: 'संदेश कैसे पढ़ें',
      how1t: 'उसने क्या पूछा',
      how1b: 'दिन भर के प्रमाण सत्रों से उसके अपने सवाल, उसी के शब्दों में। किसी सवाल को अच्छा या बुरा नहीं कहा जाता; पूछना ही असली बात है।',
      how2t: 'खाने की मेज़ का सवाल',
      how2b: 'उसके अपने सवालों से बना, ताकि बातचीत वहीं से शुरू हो जहाँ उसकी जिज्ञासा पहले से है। सवाल पूछिए, फिर जितना सहज लगे उससे थोड़ा ज़्यादा देर सुनिए।',
      how3t: 'मेहनत और आत्मविश्वास',
      how3b: 'हर सत्र के आख़िर में मीरा दो बार टैप करती है: उसने कितनी मेहनत की, और उसे कितना भरोसा है कि वह चीज़ें समझ लेगी। मनोवैज्ञानिक अल्बर्ट बंडुरा ने इस दूसरे एहसास को "सेल्फ़-एफ़िकेसी" कहा; यह तारीफ़ से ज़्यादा उन छोटी जीतों से बढ़ता है जिन्हें बच्चा ख़ुद महसूस करता है। यह रेखा उसकी अपनी है, कोई अंक नहीं।',
      how4t: 'यह कहाँ रहता है',
      how4b: 'असली संस्करण में यह संदेश परिवार के अपने डिवाइस पर ही तैयार होता है। मीरा के बारे में कुछ भी किसी सर्वर पर नहीं जाता, और उसकी तुलना कभी दूसरे बच्चों से नहीं होती।',
      waitLabel: 'प्रतीक्षा सूची',
      waitH2: 'एक हफ़्ते के <em>संदेश</em> पाएँ',
      waitDek: 'यह फ़ॉर्म न कुछ सहेजता है, न कुछ भेजता है। यह बस दिखाता है कि आगे क्या होता।',
      waitLegend: 'आपके बारे में',
      fName: 'आपका पहला नाम',
      fAge: 'आपके बच्चे की उम्र',
      fChoose: 'चुनें',
      age1: '6 से 8', age2: '9 से 11', age3: '12 से 14',
      fCity: 'शहर',
      fCityPh: 'बेंगलुरु',
      fLang: 'संदेशों की भाषा',
      fSubmit: 'प्रतीक्षा सूची में जुड़ें',
      fReset: 'फिर से भरें',
      needName: 'आगे क्या होता, यह देखने के लिए अपना पहला नाम और बच्चे की उम्र भरें।',
      langIn: { en: 'अंग्रेज़ी में', hi: 'हिंदी में', kn: 'कन्नड़ में' },
      result: 'कुछ भी सहेजा या भेजा नहीं गया; असली संस्करण में, {name}, आपको प्रमाण से {lang} एक छोटा-सा नमस्ते मिलता, फिर आपके {age} साल के बच्चे के बारे में सात शामों के संदेश, और आप इन्हें कभी भी बंद कर सकते।',
      map1: 'पूरा हफ़्ता', map2: 'संदेश कैसे पढ़ें', map3: 'प्रतीक्षा सूची', map4: 'सोर्स कोड',
      days: ['सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार', 'रविवार'],
      short: ['सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि', 'रवि']
    },
    kn: {
      wordmark: 'ಪ್ರಮಾಣ <em>ಪೋಷಕರು</em>',
      langGroup: 'ಭಾಷೆ',
      theme: 'ಥೀಮ್',
      sampleStamp: 'ಮಾದರಿ',
      sampleNote: 'ಮಾದರಿ ಮಾಹಿತಿ. ಮೀರಾ ನಿಜವಾದ ಮಗು ಅಲ್ಲ, ಮತ್ತು ಈ ಪುಟದಿಂದ ಏನೂ ಎಲ್ಲಿಗೂ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.',
      h1: 'ಮೀರಾಳ <em>ಒಂದು ವಾರ</em>',
      dek: 'ಪ್ರತಿ ಸಂಜೆ ಪ್ರಮಾಣದಿಂದ ಪೋಷಕರಿಗೆ ಬರುವುದು ಇದೇ: ಮಗು ಇಂದು ಏನು ಕೇಳಿತು, ಊಟದ ಹೊತ್ತಿಗೆ ಒಂದು ಪ್ರಶ್ನೆ, ಮತ್ತು ಪ್ರಯತ್ನ ಹಾಗೂ ಆತ್ಮವಿಶ್ವಾಸ ಹೇಗೆ ಬದಲಾಯಿತು ಎಂಬ ಒಂದು ಚಿಕ್ಕ ಸಂದೇಶ. ಮೀರಾ ಒಂದು ಮಾದರಿ ಮಗು, ಹನ್ನೆರಡು ವರ್ಷ, ಬೆಂಗಳೂರಿನವಳು.',
      threadTitle: 'ಪ್ರಮಾಣ · ಮೀರಾಳ ಸಂಜೆಯ ಸಂದೇಶ',
      dayOf: 'ದಿನ',
      chooseDay: 'ದಿನ ಆಯ್ಕೆಮಾಡಿ',
      from: 'ಪ್ರಮಾಣ',
      greet: 'ಶುಭ ಸಂಜೆ. ಮೀರಾಳ {day} ಹೀಗಿತ್ತು.',
      asked: 'ಇಂದು ಮೀರಾ ಕೇಳಿದ್ದು',
      dinner: 'ಊಟದ ಹೊತ್ತಿಗೆ ಒಂದು ಪ್ರಶ್ನೆ',
      why: 'ಇದೇ ಪ್ರಶ್ನೆ ಯಾಕೆ',
      trend: 'ಈ ವಾರದ ಪ್ರಯತ್ನ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸ',
      effort: 'ಪ್ರಯತ್ನ',
      belief: '"ನಾನು ಇದನ್ನು ಬಿಡಿಸಬಲ್ಲೆ"',
      first: 'ವಾರದ ಮೊದಲ ದಿನ',
      up: 'ಸೋಮವಾರಕ್ಕಿಂತ ಹೆಚ್ಚು',
      same: 'ಸೋಮವಾರದಷ್ಟೇ',
      down: 'ಸೋಮವಾರಕ್ಕಿಂತ ಕಡಿಮೆ',
      weekCount: 'ಈ ವಾರದ ಪ್ರಶ್ನೆಗಳು',
      prev: '← ಹಿಂದಿನ ದಿನ',
      next: 'ಮುಂದಿನ ದಿನ →',
      endLine: 'ಇದು ಇಡೀ ವಾರ. ಇಂತಹ ಸಂದೇಶಕ್ಕೆ ತಿಂಗಳಿಗೊಮ್ಮೆ ಶುಲ್ಕ ಕೊಡುವುದು ನಿಮಗೆ ಸರಿ ಅನ್ನಿಸುತ್ತದೆಯೇ?',
      endCta: 'ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ →',
      earlier: 'ಈ ವಾರ ಹಿಂದೆ',
      chartLabel: 'ಸೋಮವಾರದಿಂದ {day}ದವರೆಗೆ ಪ್ರಯತ್ನ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸ, ಐದರಲ್ಲಿ',
      howLabel: 'ಸಂದೇಶವನ್ನು ಹೇಗೆ ಓದುವುದು',
      how1t: 'ಅವಳು ಏನು ಕೇಳಿದಳು',
      how1b: 'ದಿನದ ಪ್ರಮಾಣ ಅವಧಿಗಳಲ್ಲಿ ಅವಳು ಕೇಳಿದ ಪ್ರಶ್ನೆಗಳು, ಅವಳದೇ ಮಾತುಗಳಲ್ಲಿ. ಯಾವ ಪ್ರಶ್ನೆಯನ್ನೂ ಒಳ್ಳೆಯದು ಅಥವಾ ಕೆಟ್ಟದು ಎನ್ನುವುದಿಲ್ಲ; ಕೇಳುವುದೇ ಮುಖ್ಯ.',
      how2t: 'ಊಟದ ಹೊತ್ತಿನ ಪ್ರಶ್ನೆ',
      how2b: 'ಅವಳ ಪ್ರಶ್ನೆಗಳಿಂದಲೇ ಹುಟ್ಟಿದ್ದು, ಹಾಗಾಗಿ ಮಾತು ಅವಳ ಕುತೂಹಲ ಈಗಾಗಲೇ ಇರುವಲ್ಲಿಂದ ಶುರುವಾಗುತ್ತದೆ. ಪ್ರಶ್ನೆ ಕೇಳಿ, ನಂತರ ಸಹಜ ಅನ್ನಿಸುವುದಕ್ಕಿಂತ ಸ್ವಲ್ಪ ಹೆಚ್ಚು ಹೊತ್ತು ಕೇಳಿಸಿಕೊಳ್ಳಿ.',
      how3t: 'ಪ್ರಯತ್ನ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸ',
      how3b: 'ಪ್ರತಿ ಅವಧಿಯ ಕೊನೆಯಲ್ಲಿ ಮೀರಾ ಎರಡು ಬಾರಿ ಟ್ಯಾಪ್ ಮಾಡುತ್ತಾಳೆ: ಎಷ್ಟು ಪ್ರಯತ್ನಪಟ್ಟಳು, ಮತ್ತು ವಿಷಯಗಳನ್ನು ತಾನು ಬಿಡಿಸಬಲ್ಲೆ ಎಂಬ ನಂಬಿಕೆ ಎಷ್ಟಿದೆ. ಮನೋವಿಜ್ಞಾನಿ ಆಲ್ಬರ್ಟ್ ಬಂಡೂರಾ ಈ ಎರಡನೆಯ ಭಾವನೆಯನ್ನು "ಸೆಲ್ಫ್-ಎಫಿಕಸಿ" ಎಂದು ಕರೆದರು; ಇದು ಹೊಗಳಿಕೆಗಿಂತ ಹೆಚ್ಚಾಗಿ, ಮಗು ತಾನೇ ಗಮನಿಸುವ ಚಿಕ್ಕ ಗೆಲುವುಗಳಿಂದ ಬೆಳೆಯುತ್ತದೆ. ಈ ರೇಖೆ ಅವಳದು, ಅಂಕ ಅಲ್ಲ.',
      how4t: 'ಇದು ಎಲ್ಲಿರುತ್ತದೆ',
      how4b: 'ನಿಜವಾದ ಆವೃತ್ತಿಯಲ್ಲಿ ಈ ಸಂದೇಶ ಕುಟುಂಬದ ಸ್ವಂತ ಸಾಧನದಲ್ಲೇ ತಯಾರಾಗುತ್ತದೆ. ಮೀರಾಳ ಬಗ್ಗೆ ಯಾವುದೂ ಸರ್ವರ್‌ಗೆ ಹೋಗುವುದಿಲ್ಲ, ಮತ್ತು ಅವಳನ್ನು ಬೇರೆ ಮಕ್ಕಳೊಂದಿಗೆ ಎಂದಿಗೂ ಹೋಲಿಸುವುದಿಲ್ಲ.',
      waitLabel: 'ಕಾಯುವ ಪಟ್ಟಿ',
      waitH2: 'ಒಂದು ವಾರದ <em>ಸಂದೇಶಗಳು</em> ಪಡೆಯಿರಿ',
      waitDek: 'ಈ ಫಾರ್ಮ್ ಏನನ್ನೂ ಉಳಿಸುವುದಿಲ್ಲ, ಏನನ್ನೂ ಕಳುಹಿಸುವುದಿಲ್ಲ. ಮುಂದೆ ಏನಾಗುತ್ತಿತ್ತು ಎಂಬುದನ್ನು ಮಾತ್ರ ತೋರಿಸುತ್ತದೆ.',
      waitLegend: 'ನಿಮ್ಮ ಬಗ್ಗೆ',
      fName: 'ನಿಮ್ಮ ಮೊದಲ ಹೆಸರು',
      fAge: 'ನಿಮ್ಮ ಮಗುವಿನ ವಯಸ್ಸು',
      fChoose: 'ಆಯ್ಕೆಮಾಡಿ',
      age1: '6 ರಿಂದ 8', age2: '9 ರಿಂದ 11', age3: '12 ರಿಂದ 14',
      fCity: 'ನಗರ',
      fCityPh: 'ಬೆಂಗಳೂರು',
      fLang: 'ಸಂದೇಶಗಳ ಭಾಷೆ',
      fSubmit: 'ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿ',
      fReset: 'ಮತ್ತೆ ಭರ್ತಿ ಮಾಡಿ',
      needName: 'ಮುಂದೆ ಏನಾಗುತ್ತಿತ್ತು ಎಂದು ನೋಡಲು ನಿಮ್ಮ ಮೊದಲ ಹೆಸರು ಮತ್ತು ಮಗುವಿನ ವಯಸ್ಸನ್ನು ಸೇರಿಸಿ.',
      langIn: { en: 'ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ', hi: 'ಹಿಂದಿಯಲ್ಲಿ', kn: 'ಕನ್ನಡದಲ್ಲಿ' },
      result: 'ಏನನ್ನೂ ಉಳಿಸಿಲ್ಲ, ಕಳುಹಿಸಿಲ್ಲ; ನಿಜವಾದ ಆವೃತ್ತಿಯಲ್ಲಿ, {name} ಅವರೇ, ನಿಮಗೆ ಪ್ರಮಾಣದಿಂದ {lang} ಒಂದು ಸಾಲಿನ ನಮಸ್ಕಾರ ಬರುತ್ತಿತ್ತು, ನಂತರ ನಿಮ್ಮ {age} ವರ್ಷದ ಮಗುವಿನ ಬಗ್ಗೆ ಏಳು ಸಂಜೆಗಳ ಸಂದೇಶಗಳು, ಮತ್ತು ಯಾವಾಗ ಬೇಕಾದರೂ ಅವುಗಳನ್ನು ನಿಲ್ಲಿಸಬಹುದಿತ್ತು.',
      map1: 'ಇಡೀ ವಾರ', map2: 'ಸಂದೇಶವನ್ನು ಹೇಗೆ ಓದುವುದು', map3: 'ಕಾಯುವ ಪಟ್ಟಿ', map4: 'ಮೂಲ ಕೋಡ್',
      days: ['ಸೋಮವಾರ', 'ಮಂಗಳವಾರ', 'ಬುಧವಾರ', 'ಗುರುವಾರ', 'ಶುಕ್ರವಾರ', 'ಶನಿವಾರ', 'ಭಾನುವಾರ'],
      short: ['ಸೋಮ', 'ಮಂಗಳ', 'ಬುಧ', 'ಗುರು', 'ಶುಕ್ರ', 'ಶನಿ', 'ಭಾನು']
    }
  };

  /* ---------- the sample week (meera, 12, bengaluru) ----------
     effort and belief are meera's own two taps, 1 to 5. sample values, not a real child. */
  var WEEK = [
    {
      date: '21.09.26', num: '21', effort: 3, belief: 2,
      en: {
        asked: ['why does the rain smell like that even before it starts?', 'if the moon has no light of its own, why is it so bright tonight?'],
        dinner: 'what is one thing you noticed today that nobody else seemed to notice?',
        why: 'noticing comes before asking. this question hands her the floor first.',
        note: 'she stayed with a tricky map worksheet for twenty minutes before asking for help.'
      },
      hi: {
        asked: ['बारिश शुरू होने से पहले ही वो खुशबू क्यों आने लगती है?', 'अगर चाँद की अपनी रोशनी नहीं है, तो आज रात वो इतना चमकीला क्यों है?'],
        dinner: 'आज तुमने ऐसी कौन-सी चीज़ देखी जिस पर किसी और का ध्यान नहीं गया?',
        why: 'पूछने से पहले ध्यान देना आता है। यह सवाल बात की शुरुआत उसी के हाथ में देता है।',
        note: 'मदद माँगने से पहले वह नक्शे वाली एक मुश्किल वर्कशीट पर बीस मिनट तक लगी रही।'
      },
      kn: {
        asked: ['ಮಳೆ ಶುರುವಾಗೋ ಮುಂಚೆನೇ ಆ ವಾಸನೆ ಯಾಕೆ ಬರುತ್ತೆ?', 'ಚಂದ್ರನಿಗೆ ತನ್ನದೇ ಬೆಳಕು ಇಲ್ಲ ಅಂದ್ರೆ, ಇವತ್ತು ರಾತ್ರಿ ಅಷ್ಟು ಹೊಳೀತಿರೋದು ಯಾಕೆ?'],
        dinner: 'ಇವತ್ತು ಬೇರೆ ಯಾರೂ ಗಮನಿಸದ ಯಾವ ಒಂದು ವಿಷಯವನ್ನು ನೀನು ಗಮನಿಸಿದೆ?',
        why: 'ಕೇಳುವುದಕ್ಕಿಂತ ಮೊದಲು ಗಮನಿಸುವುದು ಬರುತ್ತದೆ. ಈ ಪ್ರಶ್ನೆ ಮಾತಿನ ಮೊದಲ ಅವಕಾಶವನ್ನು ಅವಳಿಗೇ ಕೊಡುತ್ತದೆ.',
        note: 'ಸಹಾಯ ಕೇಳುವ ಮೊದಲು ಅವಳು ಒಂದು ಕಷ್ಟದ ನಕ್ಷೆಯ ವರ್ಕ್‌ಶೀಟ್ ಮೇಲೆ ಇಪ್ಪತ್ತು ನಿಮಿಷ ಕೆಲಸ ಮಾಡಿದಳು.'
      }
    },
    {
      date: '22.09.26', num: '22', effort: 3, belief: 3,
      en: {
        asked: ['how do ants find their way back to the same crack in the wall?', 'why does ajji say we should not cut our nails at night?'],
        dinner: 'what is one thing grown-ups say that you would like to test?',
        why: 'turning a house rule into a small test is how scientific thinking starts.',
        note: 'she tried the same long-division problem three different ways.'
      },
      hi: {
        asked: ['चींटियाँ दीवार की उसी दरार तक वापस रास्ता कैसे ढूँढ लेती हैं?', 'नानी क्यों कहती हैं कि रात को नाखून नहीं काटने चाहिए?'],
        dinner: 'बड़े लोग ऐसी कौन-सी बात कहते हैं जिसे तुम परखकर देखना चाहोगी?',
        why: 'घर के किसी नियम को एक छोटे प्रयोग में बदलना ही वैज्ञानिक सोच की शुरुआत है।',
        note: 'उसने भाग का एक ही लंबा सवाल तीन अलग-अलग तरीकों से करके देखा।'
      },
      kn: {
        asked: ['ಇರುವೆಗಳು ಗೋಡೆಯ ಅದೇ ಬಿರುಕಿಗೆ ವಾಪಸ್ ದಾರಿ ಹೇಗೆ ಕಂಡುಹಿಡಿಯುತ್ತವೆ?', 'ರಾತ್ರಿ ಉಗುರು ಕತ್ತರಿಸಬಾರದು ಅಂತ ಅಜ್ಜಿ ಯಾಕೆ ಹೇಳ್ತಾರೆ?'],
        dinner: 'ದೊಡ್ಡವರು ಹೇಳುವ ಯಾವ ಮಾತನ್ನು ನೀನು ಪರೀಕ್ಷಿಸಿ ನೋಡಲು ಇಷ್ಟಪಡುತ್ತೀಯ?',
        why: 'ಮನೆಯ ಒಂದು ನಿಯಮವನ್ನು ಚಿಕ್ಕ ಪ್ರಯೋಗವನ್ನಾಗಿ ಮಾಡುವುದೇ ವೈಜ್ಞಾನಿಕ ಯೋಚನೆಯ ಆರಂಭ.',
        note: 'ಒಂದೇ ದೀರ್ಘ ಭಾಗಾಕಾರದ ಲೆಕ್ಕವನ್ನು ಅವಳು ಮೂರು ಬೇರೆ ಬೇರೆ ರೀತಿಯಲ್ಲಿ ಮಾಡಿ ನೋಡಿದಳು.'
      }
    },
    {
      date: '23.09.26', num: '23', effort: 2, belief: 2,
      en: {
        asked: ['why does a cricket ball swing more when the sky is cloudy?', 'can a batter ever hit the ball faster than it was bowled?'],
        dinner: 'if you could ask one cricketer one question, who would it be and what would you ask?',
        why: 'questions about something she loves are practice for questions about everything else.',
        note: 'a quieter day. she said the fractions felt hard and stopped early. one slow day is part of a normal week.'
      },
      hi: {
        asked: ['बादल होने पर क्रिकेट की गेंद ज़्यादा स्विंग क्यों होती है?', 'क्या कोई बल्लेबाज़ गेंद को उससे भी तेज़ मार सकता है जितनी तेज़ वो फेंकी गई थी?'],
        dinner: 'अगर तुम किसी एक क्रिकेटर से एक सवाल पूछ सकती, तो किससे और क्या पूछती?',
        why: 'जिस चीज़ से उसे लगाव है, उसके बारे में पूछना बाकी सब चीज़ों के बारे में पूछने का अभ्यास है।',
        note: 'आज का दिन थोड़ा धीमा रहा। उसने कहा कि भिन्न मुश्किल लग रहे थे और वह जल्दी रुक गई। हफ़्ते में एक धीमा दिन आम बात है।'
      },
      kn: {
        asked: ['ಮೋಡ ಇದ್ದಾಗ ಕ್ರಿಕೆಟ್ ಬಾಲ್ ಯಾಕೆ ಜಾಸ್ತಿ ಸ್ವಿಂಗ್ ಆಗುತ್ತೆ?', 'ಬೌಲ್ ಮಾಡಿದ್ದಕ್ಕಿಂತ ಜೋರಾಗಿ ಬ್ಯಾಟರ್ ಬಾಲ್ ಹೊಡೆಯೋಕೆ ಆಗುತ್ತಾ?'],
        dinner: 'ಒಬ್ಬ ಕ್ರಿಕೆಟಿಗನಿಗೆ ಒಂದೇ ಒಂದು ಪ್ರಶ್ನೆ ಕೇಳುವ ಅವಕಾಶ ಸಿಕ್ಕರೆ, ಯಾರನ್ನು, ಏನು ಕೇಳುತ್ತೀಯ?',
        why: 'ತನಗಿಷ್ಟವಾದ ವಿಷಯದ ಬಗ್ಗೆ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳು, ಉಳಿದೆಲ್ಲದರ ಬಗ್ಗೆ ಕೇಳುವುದಕ್ಕೆ ಅಭ್ಯಾಸ.',
        note: 'ಇವತ್ತು ಸ್ವಲ್ಪ ನಿಧಾನದ ದಿನ. ಭಿನ್ನರಾಶಿಗಳು ಕಷ್ಟ ಅನ್ನಿಸಿತು ಎಂದು ಹೇಳಿ ಅವಳು ಬೇಗ ನಿಲ್ಲಿಸಿದಳು. ವಾರದಲ್ಲಿ ಒಂದು ನಿಧಾನದ ದಿನ ಸಹಜ.'
      }
    },
    {
      date: '24.09.26', num: '24', effort: 4, belief: 3,
      en: {
        asked: ['why do we have leap years but no leap months?', 'who decided that a week has seven days?'],
        dinner: 'what would change at home if a week had only five days?',
        why: 'a "what if" question has many good answers, so everyone at the table gets to play.',
        note: 'she went back to yesterday\'s fractions on her own and finished them.'
      },
      hi: {
        asked: ['लीप ईयर होते हैं, तो लीप महीने क्यों नहीं होते?', 'किसने तय किया कि हफ़्ते में सात दिन होंगे?'],
        dinner: 'अगर हफ़्ते में सिर्फ़ पाँच दिन होते, तो घर में क्या-क्या बदल जाता?',
        why: '"अगर ऐसा हो तो" वाले सवाल के कई अच्छे जवाब होते हैं, इसलिए मेज़ पर बैठा हर कोई खेल में शामिल हो सकता है।',
        note: 'वह अपने आप कल वाले भिन्नों पर लौटी और उन्हें पूरा किया।'
      },
      kn: {
        asked: ['ಅಧಿಕ ವರ್ಷ ಇರುತ್ತೆ, ಆದ್ರೆ ಅಧಿಕ ತಿಂಗಳು ಯಾಕಿಲ್ಲ?', 'ವಾರಕ್ಕೆ ಏಳು ದಿನ ಅಂತ ಯಾರು ತೀರ್ಮಾನ ಮಾಡಿದ್ರು?'],
        dinner: 'ವಾರಕ್ಕೆ ಐದೇ ದಿನ ಇದ್ದಿದ್ದರೆ, ಮನೆಯಲ್ಲಿ ಏನೇನು ಬದಲಾಗುತ್ತಿತ್ತು?',
        why: '"ಹೀಗಾದರೆ ಏನು?" ಎಂಬ ಪ್ರಶ್ನೆಗೆ ಹಲವು ಒಳ್ಳೆಯ ಉತ್ತರಗಳಿರುತ್ತವೆ, ಹಾಗಾಗಿ ಮೇಜಿನ ಬಳಿ ಇರುವ ಎಲ್ಲರೂ ಆಟದಲ್ಲಿ ಸೇರಬಹುದು.',
        note: 'ನಿನ್ನೆಯ ಭಿನ್ನರಾಶಿಗಳಿಗೆ ಅವಳು ತಾನಾಗಿಯೇ ವಾಪಸ್ ಹೋಗಿ ಅವುಗಳನ್ನು ಮುಗಿಸಿದಳು.'
      }
    },
    {
      date: '25.09.26', num: '25', effort: 4, belief: 4,
      en: {
        asked: ['why do onions make us cry but tomatoes don\'t?', 'is it true that honey never goes bad?', 'how does the pressure cooker know when to whistle?'],
        dinner: 'what is one thing in our kitchen you would like to take apart and understand?',
        why: 'the kitchen is the nearest lab in the house, and the weekend is coming.',
        note: 'she explained the cooker whistle to her younger brother, ishaan, twice, until he got it.'
      },
      hi: {
        asked: ['प्याज़ काटने पर आँसू क्यों आते हैं, टमाटर काटने पर क्यों नहीं?', 'क्या यह सच है कि शहद कभी ख़राब नहीं होता?', 'प्रेशर कुकर को कैसे पता चलता है कि सीटी कब बजानी है?'],
        dinner: 'हमारी रसोई की कौन-सी चीज़ तुम खोलकर समझना चाहोगी?',
        why: 'रसोई घर की सबसे पास वाली प्रयोगशाला है, और वीकेंड आ रहा है।',
        note: 'उसने अपने छोटे भाई ईशान को कुकर की सीटी दो बार समझाई, जब तक उसकी समझ में नहीं आ गई।'
      },
      kn: {
        asked: ['ಈರುಳ್ಳಿ ಹೆಚ್ಚಿದ್ರೆ ಕಣ್ಣೀರು ಯಾಕೆ ಬರುತ್ತೆ, ಟೊಮ್ಯಾಟೊ ಹೆಚ್ಚಿದ್ರೆ ಯಾಕೆ ಬರಲ್ಲ?', 'ಜೇನುತುಪ್ಪ ಯಾವತ್ತೂ ಕೆಡಲ್ಲ ಅನ್ನೋದು ನಿಜಾನಾ?', 'ಕುಕ್ಕರ್‌ಗೆ ಯಾವಾಗ ಸೀಟಿ ಹೊಡೀಬೇಕು ಅಂತ ಹೇಗೆ ಗೊತ್ತಾಗುತ್ತೆ?'],
        dinner: 'ನಮ್ಮ ಅಡುಗೆಮನೆಯ ಯಾವ ವಸ್ತುವನ್ನು ಬಿಚ್ಚಿ ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಲು ನಿನಗೆ ಇಷ್ಟ?',
        why: 'ಅಡುಗೆಮನೆ ಮನೆಯ ಅತಿ ಹತ್ತಿರದ ಪ್ರಯೋಗಾಲಯ, ಮತ್ತು ವಾರಾಂತ್ಯ ಬರುತ್ತಿದೆ.',
        note: 'ಕುಕ್ಕರ್ ಸೀಟಿ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಎಂದು ಅವಳು ತನ್ನ ತಮ್ಮ ಇಶಾನ್‌ಗೆ, ಅವನಿಗೆ ಅರ್ಥವಾಗುವವರೆಗೆ ಎರಡು ಬಾರಿ ವಿವರಿಸಿದಳು.'
      }
    },
    {
      date: '26.09.26', num: '26', effort: 5, belief: 4,
      en: {
        asked: ['why did the milk boil over the one second i looked away?', 'why do puddles dry faster on the road than in the park?'],
        dinner: 'what did you try today that did not work the first time?',
        why: 'talking about first tries makes the next try feel smaller.',
        note: 'her paper boat sank twice in the balcony puddle. the third one floated all the way across.'
      },
      hi: {
        asked: ['जिस एक सेकंड मैंने नज़र हटाई, उसी में दूध उबलकर बाहर क्यों गिर गया?', 'सड़क पर भरा पानी पार्क से जल्दी क्यों सूख जाता है?'],
        dinner: 'आज तुमने क्या आज़माया जो पहली बार में नहीं बना?',
        why: 'पहली कोशिशों के बारे में बात करने से अगली कोशिश छोटी लगने लगती है।',
        note: 'बालकनी में भरे पानी में उसकी काग़ज़ की नाव दो बार डूबी। तीसरी वाली तैरकर उस पार पहुँच गई।'
      },
      kn: {
        asked: ['ನಾನು ಒಂದೇ ಒಂದು ಸೆಕೆಂಡ್ ಬೇರೆ ಕಡೆ ನೋಡಿದಾಗ ಹಾಲು ಯಾಕೆ ಉಕ್ಕಿ ಹೋಯ್ತು?', 'ಪಾರ್ಕ್‌ಗಿಂತ ರಸ್ತೆ ಮೇಲಿನ ನೀರು ಯಾಕೆ ಬೇಗ ಒಣಗುತ್ತೆ?'],
        dinner: 'ಇವತ್ತು ನೀನು ಪ್ರಯತ್ನಿಸಿದ ಯಾವುದು ಮೊದಲ ಸಲ ಆಗಲಿಲ್ಲ?',
        why: 'ಮೊದಲ ಪ್ರಯತ್ನಗಳ ಬಗ್ಗೆ ಮಾತನಾಡಿದರೆ, ಮುಂದಿನ ಪ್ರಯತ್ನ ಅಷ್ಟು ದೊಡ್ಡದು ಅನ್ನಿಸುವುದಿಲ್ಲ.',
        note: 'ಬಾಲ್ಕನಿಯಲ್ಲಿ ನಿಂತ ನೀರಿನಲ್ಲಿ ಅವಳ ಕಾಗದದ ದೋಣಿ ಎರಡು ಬಾರಿ ಮುಳುಗಿತು. ಮೂರನೆಯದು ಆಚೆ ತುದಿಯವರೆಗೂ ತೇಲಿ ಹೋಯಿತು.'
      }
    },
    {
      date: '27.09.26', num: '27', effort: 4, belief: 5,
      en: {
        asked: ['if i ask a lot of questions, does that mean i am clever or that i don\'t know much?', 'what did you ask about when you were twelve?'],
        dinner: 'which question from this week do you still want to find out about?',
        why: 'looking back at a week of her own questions shows her that asking is already a habit.',
        note: 'across the week she stayed with hard things for longer on four of seven days.'
      },
      hi: {
        asked: ['अगर मैं बहुत सवाल पूछती हूँ, तो इसका मतलब मैं होशियार हूँ या मुझे ज़्यादा कुछ नहीं आता?', 'जब आप बारह साल के थे, तब आप किस बारे में सवाल पूछते थे?'],
        dinner: 'इस हफ़्ते का कौन-सा सवाल है जिसके बारे में तुम अब भी जानना चाहती हो?',
        why: 'पूरे हफ़्ते के अपने सवालों को पलटकर देखने से उसे दिखता है कि पूछना उसकी आदत बन चुका है।',
        note: 'पूरे हफ़्ते में, सात में से चार दिन वह मुश्किल काम पर ज़्यादा देर टिकी रही।'
      },
      kn: {
        asked: ['ನಾನು ತುಂಬಾ ಪ್ರಶ್ನೆ ಕೇಳಿದ್ರೆ, ನಾನು ಬುದ್ಧಿವಂತೆ ಅಂತನಾ ಅಥವಾ ನನಗೆ ಹೆಚ್ಚು ಗೊತ್ತಿಲ್ಲ ಅಂತನಾ?', 'ನೀವು ಹನ್ನೆರಡು ವರ್ಷದವರಾಗಿದ್ದಾಗ ಯಾವುದರ ಬಗ್ಗೆ ಪ್ರಶ್ನೆ ಕೇಳ್ತಿದ್ರಿ?'],
        dinner: 'ಈ ವಾರದ ಯಾವ ಪ್ರಶ್ನೆಯ ಬಗ್ಗೆ ನಿನಗೆ ಇನ್ನೂ ತಿಳಿದುಕೊಳ್ಳಬೇಕು ಅನ್ನಿಸುತ್ತಿದೆ?',
        why: 'ಇಡೀ ವಾರದ ತನ್ನ ಪ್ರಶ್ನೆಗಳನ್ನು ಹಿಂತಿರುಗಿ ನೋಡಿದಾಗ, ಕೇಳುವುದು ಈಗಾಗಲೇ ತನ್ನ ಅಭ್ಯಾಸ ಎಂದು ಅವಳಿಗೆ ಗೊತ್ತಾಗುತ್ತದೆ.',
        note: 'ಈ ವಾರದಲ್ಲಿ, ಏಳರಲ್ಲಿ ನಾಲ್ಕು ದಿನ ಅವಳು ಕಷ್ಟದ ಕೆಲಸದ ಜೊತೆ ಹೆಚ್ಚು ಹೊತ್ತು ಇದ್ದಳು.'
      }
    }
  ];

  /* ---------- state ---------- */
  var lang = document.documentElement.getAttribute('lang');
  if (!UI[lang]) lang = 'en';
  var day = parseInt(read(DAY_KEY), 10);
  if (!(day >= 0 && day < WEEK.length)) day = 0;

  var $ = function (id) { return document.getElementById(id); };
  function t(key) { return UI[lang][key]; }
  function fill(str, map) {
    return str.replace(/\{(\w+)\}/g, function (m, k) { return map[k] != null ? map[k] : m; });
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  // our own copy only: "plain <em>italic</em>" becomes text + an <em> node
  function setEm(n, str) {
    clear(n);
    var parts = str.split(/<em>|<\/em>/);
    parts.forEach(function (p, i) {
      if (!p) return;
      n.appendChild(i % 2 === 1 ? el('em', null, p) : document.createTextNode(p));
    });
  }
  function dots(v) {
    var s = '';
    for (var i = 1; i <= 5; i++) s += i <= v ? '●' : '○';
    return s;
  }

  /* ---------- static copy ---------- */
  function applyStatic() {
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-html]').forEach(function (n) { setEm(n, t(n.getAttribute('data-i18n-html'))); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (n) { n.setAttribute('placeholder', t(n.getAttribute('data-i18n-ph'))); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (n) { n.setAttribute('aria-label', t(n.getAttribute('data-i18n-aria'))); });
    $('day-strip').setAttribute('aria-label', t('chooseDay'));
    document.querySelectorAll('.lang-toggle [data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    document.title = (lang === 'en' ? 'pramaan parents · a week of meera' : t('threadTitle'));
    // default the notes language to the page language unless the parent already picked one
    var radios = document.querySelectorAll('input[name="nlang"]');
    var picked = Array.prototype.some.call(radios, function (r) { return r.dataset.user === '1'; });
    if (!picked) radios.forEach(function (r) { r.checked = r.value === lang; });
  }

  /* ---------- day strip ---------- */
  function renderStrip() {
    var strip = $('day-strip');
    clear(strip);
    WEEK.forEach(function (d, i) {
      var b = el('button', 'day-pill');
      b.type = 'button';
      b.setAttribute('aria-pressed', String(i === day));
      b.setAttribute('aria-label', t('days')[i] + ' ' + d.date);
      b.appendChild(el('span', 'dp-name', t('short')[i]));
      b.appendChild(el('span', 'dp-num mono', d.num));
      b.addEventListener('click', function () { go(i, true); });
      strip.appendChild(b);
    });
  }

  /* ---------- sparkline ---------- */
  var SVGNS = 'http://www.w3.org/2000/svg';
  function svgEl(tag, attrs, cls) {
    var n = document.createElementNS(SVGNS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (cls) n.setAttribute('class', cls);
    return n;
  }
  function x(i) { return 14 + i * 30; }
  function y(v) { return 8 + (5 - v) * 8; }
  function sparkline(upto) {
    var svg = svgEl('svg', { viewBox: '0 0 208 62', role: 'img', 'aria-label': fill(t('chartLabel'), { day: t('days')[upto] }) }, 'spark');
    svg.appendChild(svgEl('line', { x1: 6, x2: 202, y1: 44, y2: 44 }, 'sp-base'));
    var eff = [], bel = [];
    for (var i = 0; i <= upto; i++) {
      eff.push(x(i) + ',' + y(WEEK[i].effort));
      bel.push(x(i) + ',' + y(WEEK[i].belief));
    }
    if (upto > 0) {
      svg.appendChild(svgEl('polyline', { points: bel.join(' ') }, 'sp-belief'));
      svg.appendChild(svgEl('polyline', { points: eff.join(' ') }, 'sp-effort'));
    }
    WEEK.forEach(function (d, i) {
      if (i <= upto) {
        var r = i === upto ? 3.2 : 2.2;
        svg.appendChild(svgEl('circle', { cx: x(i), cy: y(d.belief), r: r }, 'sp-dot-belief'));
        svg.appendChild(svgEl('circle', { cx: x(i), cy: y(d.effort), r: r }, 'sp-dot-effort'));
      } else {
        svg.appendChild(svgEl('circle', { cx: x(i), cy: 44, r: 1.4 }, 'sp-future'));
      }
      var lab = svgEl('text', { x: x(i), y: 58, 'text-anchor': 'middle' }, i === upto ? 'sp-label now' : 'sp-label');
      lab.textContent = t('short')[i];
      svg.appendChild(lab);
    });
    return svg;
  }
  function compare(key, i) {
    if (i === 0) return t('first');
    var a = WEEK[i][key], b = WEEK[0][key];
    return a > b ? t('up') : a < b ? t('down') : t('same');
  }

  /* ---------- thread ---------- */
  function questionsUpTo(i) {
    var n = 0;
    for (var k = 0; k <= i; k++) n += WEEK[k].en.asked.length;
    return n;
  }

  function renderThread() {
    var thread = $('thread');
    clear(thread);

    if (day > 0) {
      thread.appendChild(el('p', 'part-label earlier-label', t('earlier')));
      for (var i = 0; i < day; i++) {
        (function (i) {
          var b = el('button', 'earlier');
          b.type = 'button';
          b.appendChild(el('time', null, WEEK[i].date));
          b.appendChild(el('span', 'e-day', t('short')[i]));
          b.appendChild(el('span', 'e-preview', WEEK[i][lang].dinner));
          b.addEventListener('click', function () { go(i, true); });
          thread.appendChild(b);
        })(i);
      }
    }

    var d = WEEK[day];
    var c = d[lang];
    var msg = el('article', 'msg');
    msg.setAttribute('aria-label', t('days')[day] + ' ' + d.date);

    var head = el('header', 'msg-head');
    head.appendChild(el('span', 'msg-from', t('from')));
    head.appendChild(el('time', null, d.date + ' · 20:30'));
    msg.appendChild(head);

    msg.appendChild(el('p', 'greet', fill(t('greet'), { day: t('days')[day] })));

    // what she asked
    var p1 = el('section', 'msg-part');
    var l1 = el('p', 'part-label', t('asked'));
    l1.appendChild(el('span', 'count', String(c.asked.length)));
    p1.appendChild(l1);
    var ul = el('ul', 'asked');
    c.asked.forEach(function (q) { ul.appendChild(el('li', null, q)); });
    p1.appendChild(ul);
    msg.appendChild(p1);

    // dinner
    var p2 = el('section', 'msg-part');
    p2.appendChild(el('p', 'part-label', t('dinner')));
    p2.appendChild(el('p', 'dinner-q', c.dinner));
    var why = el('p', 'why');
    why.appendChild(el('span', 'why-k', t('why') + ': '));
    why.appendChild(document.createTextNode(c.why));
    p2.appendChild(why);
    msg.appendChild(p2);

    // trend
    var p3 = el('section', 'msg-part');
    p3.appendChild(el('p', 'part-label', t('trend')));
    p3.appendChild(sparkline(day));
    var leg = el('ul', 'legend');
    [['effort', 'effort', 'sw-effort'], ['belief', 'belief', 'sw-belief']].forEach(function (row) {
      var li = el('li');
      li.appendChild(el('span', 'swatch ' + row[2]));
      li.appendChild(el('span', 'lg-name', t(row[0])));
      var v = el('span', 'lg-dots mono', dots(d[row[1]]));
      v.setAttribute('aria-label', d[row[1]] + ' / 5');
      li.appendChild(v);
      li.appendChild(el('span', 'lg-cmp', compare(row[1], day)));
      leg.appendChild(li);
    });
    p3.appendChild(leg);
    p3.appendChild(el('p', 'note', c.note));
    msg.appendChild(p3);

    var foot = el('p', 'msg-foot');
    foot.appendChild(el('span', null, t('weekCount')));
    foot.appendChild(el('span', 'mono', String(questionsUpTo(day))));
    msg.appendChild(foot);

    thread.appendChild(msg);

    if (day === WEEK.length - 1) {
      thread.appendChild(el('p', 'week-end', t('endLine')));
    }

    var prev = $('prev');
    prev.textContent = t('prev');
    prev.disabled = day === 0;
    var slot = $('next-slot');
    clear(slot);
    if (day < WEEK.length - 1) {
      var nb = el('button', 'pill primary', t('next'));
      nb.type = 'button';
      nb.id = 'next';
      nb.addEventListener('click', function () { go(day + 1, false); });
      slot.appendChild(nb);
    } else {
      var a = el('a', 'pill primary', t('endCta'));
      a.href = '#waitlist';
      a.id = 'next';
      slot.appendChild(a);
    }

    $('day-meta').textContent = t('dayOf') + ' ' + (day + 1) + ' / ' + WEEK.length;
  }

  function go(i, fromStrip) {
    if (i < 0 || i >= WEEK.length) return;
    day = i;
    store(DAY_KEY, String(day));
    renderStrip();
    renderThread();
    if (fromStrip) {
      var pressed = document.querySelector('.day-pill[aria-pressed="true"]');
      if (pressed) pressed.focus();
    } else {
      var n = $('next') || $('prev');
      if (document.activeElement === document.body || !document.activeElement) n.focus();
    }
  }

  function renderAll() {
    applyStatic();
    renderStrip();
    renderThread();
    renderResult();
  }

  /* ---------- language ---------- */
  document.querySelectorAll('.lang-toggle [data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      lang = b.getAttribute('data-lang');
      store(LANG_KEY, lang);
      renderAll();
    });
  });

  /* ---------- theme ---------- */
  $('theme').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.getAttribute('data-theme') === 'dark' ||
      (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store('theme', next);
  });

  /* ---------- prev / keyboard ---------- */
  $('prev').addEventListener('click', function () { go(day - 1, false); });
  $('week').addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { go(day + 1, true); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { go(day - 1, true); e.preventDefault(); }
  });

  /* ---------- waitlist: stores nothing, sends nothing ---------- */
  var form = $('wait-form');
  var lastSubmit = null; // held in memory only, so a language switch can re-word the sentence

  document.querySelectorAll('input[name="nlang"]').forEach(function (r) {
    r.addEventListener('change', function () {
      document.querySelectorAll('input[name="nlang"]').forEach(function (o) { o.dataset.user = '1'; });
    });
  });

  function renderResult() {
    if (!lastSubmit) return;
    var ageText = t({ '6-8': 'age1', '9-11': 'age2', '12-14': 'age3' }[lastSubmit.age]);
    $('result-text').textContent = fill(t('result'), {
      name: lastSubmit.name,
      lang: t('langIn')[lastSubmit.nlang],
      age: ageText
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.elements.name.value.trim();
    var age = form.elements.age.value;
    var checked = form.querySelector('input[name="nlang"]:checked');
    if (!name || !age) {
      $('form-hint').textContent = t('needName');
      (name ? form.elements.age : form.elements.name).focus();
      return;
    }
    $('form-hint').textContent = '';
    lastSubmit = { name: name, age: age, nlang: checked ? checked.value : lang };
    renderResult();
    $('result').hidden = false;
    $('result').scrollIntoView({ block: 'nearest' });
  });

  form.addEventListener('reset', function () {
    lastSubmit = null;
    $('result').hidden = true;
    $('result-text').textContent = '';
    $('form-hint').textContent = '';
    document.querySelectorAll('input[name="nlang"]').forEach(function (o) { delete o.dataset.user; });
    setTimeout(applyStatic, 0);
  });

  renderAll();
})();
