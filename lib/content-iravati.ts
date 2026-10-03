import type { Chapter } from './content';

// ─── SANSKRIT (R3 book- Iravati, 2026) ───────────────────────────────────────
// Chapter codes: 0904ir01 through 0904ir11. Questions are transcribed exactly
// from the NCERT book; answerKeys are placeholders to be filled in later.

export const IRAVATI_CHAPTERS: Chapter[] = [
  {
    id:'ch01', number:1, title:'अहं नमामि', slug:'aham-namami', code:'0904ir01', exercises:[
      {
        id: 's1', title: 'वयम् अभ्यासं कुर्मः',
        questions: [
          { id:'q1a', number:'१ (क)', isHard:false, text:'कवितायाः निम्नलिखितासु पङ्क्तिषु रिक्तस्थानानि पूरयत — गुरुं ______ सादरम्।', answer:{ answerKey:'गुरुं <u>नमामि</u> सादरम्।', schoolMethod:'गुरुं <u>नमामि</u> सादरम्।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'हितं करोमि ______।', answer:{ answerKey:'हितं <u>करोमि</u> सर्वदा।', schoolMethod:'हितं <u>करोमि</u> सर्वदा।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'______ नीति-सत्पथे।', answer:{ answerKey:'<u>नयामि</u> नीति-सत्पथे।', schoolMethod:'<u>नयामि</u> नीति-सत्पथे।' } },
          { id:'q1d', number:'१ (घ)', isHard:false, text:'दधामि ______ व्रतम्।', answer:{ answerKey:'दधामि <u>साधुता</u>-व्रतम्।', schoolMethod:'दधामि <u>साधुता</u>-व्रतम्।' } },
          { id:'q1e', number:'१ (ङ)', isHard:false, text:'______ कीर्तिसत्कथाम्।', answer:{ answerKey:'<u>सृजामि</u> कीर्तिसत्कथाम्।', schoolMethod:'<u>सृजामि</u> कीर्तिसत्कथाम्।' } },
          { id:'q2a', number:'२ (क)', isHard:false, text:'एकशब्देन उत्तरं लिखत — किं करोमि सर्वदा?', answer:{ answerKey:'हितम्।', schoolMethod:'हितम्।' } },
          { id:'q2b', number:'२ (ख)', isHard:false, text:'अहं प्रभुं कथं जपामि?', answer:{ answerKey:'आदरम् (अथवा भक्त्या)।', schoolMethod:'आदरम् (अथवा भक्त्या)।' } },
          { id:'q2c', number:'२ (ग)', isHard:false, text:'अहं कां हरामि?', answer:{ answerKey:'मातृभू-व्यथाम्।', schoolMethod:'मातृभू-व्यथाम्।' } },
          { id:'q2d', number:'२ (घ)', isHard:false, text:'अहं किं दधामि?', answer:{ answerKey:'साधुताव्रतम्।', schoolMethod:'साधुताव्रतम्।' } },
          { id:'q2e', number:'२ (ङ)', isHard:false, text:'अहं कां सृजामि?', answer:{ answerKey:'कीर्तिसत्कथाम्।', schoolMethod:'कीर्तिसत्कथाम्।' } },
          { id:'q3a', number:'३ (क)', isHard:false, text:'प्रश्नानाम् उत्तराणि पूर्णवाक्येन लिखत — त्वं नित्यं कां नमसि?', answer:{ answerKey:'अहं नित्यं मातरम् (तथा गुरुं) नमामि।', schoolMethod:'अहं नित्यं मातरम् (तथा गुरुं) नमामि।' } },
          { id:'q3b', number:'३ (ख)', isHard:false, text:'त्वं स्वयं किं किं करोषि?', answer:{ answerKey:'अहं स्वयं सर्वदा हितं करोमि।', schoolMethod:'अहं स्वयं सर्वदा हितं करोमि।' } },
          { id:'q3c', number:'३ (ग)', isHard:false, text:'त्वं कस्याः व्यथां हरसि?', answer:{ answerKey:'अहं मातृभूः व्यथां हरामि।', schoolMethod:'अहं मातृभूः व्यथां हरामि।' } },
          { id:'q3d', number:'३ (घ)', isHard:false, text:'त्वं किं धरसि?', answer:{ answerKey:'अहं साधुताव्रतं दधामि।', schoolMethod:'अहं साधुताव्रतं दधामि।' } },
          { id:'q3e', number:'३ (ङ)', isHard:false, text:'त्वं कां सृजसि?', answer:{ answerKey:'अहं कीर्तिसत्कथां सृजामि।', schoolMethod:'अहं कीर्तिसत्कथां सृजामि।' } },
        ]
      },
      {
        id: 's2', title: 'क्रियाकलापः',
        questions: [
          { id:'q1a', number:'१ (क)', isHard:false, text:'रिक्तस्थानानि पूरयित्वा वाक्यानि रचयत — वयं ______।', answer:{ answerKey:'वयं <u>पाठं पठामः</u>।', schoolMethod:'वयं <u>पाठं पठामः</u>।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'______ वदामि।', answer:{ answerKey:'<u>अहं सत्यं</u> वदामि।', schoolMethod:'<u>अहं सत्यं</u> वदामि।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'अहं ______।', answer:{ answerKey:'अहं <u>किं करोमि</u>।', schoolMethod:'अहं <u>किं करोमि</u>।' } },
          { id:'q1d', number:'१ (घ)', isHard:false, text:'______ चलामः।', answer:{ answerKey:'<u>वयं मार्गे</u> चलामः।', schoolMethod:'<u>वयं मार्गे</u> चलामः।' } },
          { id:'q1e', number:'१ (ङ)', isHard:false, text:'त्वं ______।', answer:{ answerKey:'त्वं <u>कुत्र गच्छसि</u>।', schoolMethod:'त्वं <u>कुत्र गच्छसि</u>।' } },
          { id:'q2a', number:'२ (क)', isHard:false, text:'एतैः क्रियापदैः वाक्यानि रचयत — नमामि', answer:{ answerKey:'अहं गुरुं नमामि।', schoolMethod:'अहं गुरुं नमामि।' } },
          { id:'q2b', number:'२ (ख)', isHard:false, text:'चलामि', answer:{ answerKey:'अहं मार्गे चलामि।', schoolMethod:'अहं मार्गे चलामि।' } },
          { id:'q2c', number:'२ (ग)', isHard:false, text:'पठामि', answer:{ answerKey:'अहं पुस्तकं पठामि।', schoolMethod:'अहं पुस्तकं पठामि।' } },
          { id:'q2d', number:'२ (घ)', isHard:false, text:'सृजामि', answer:{ answerKey:'अहं चित्रं सृजामि।', schoolMethod:'अहं चित्रं सृजामि।' } },
          { id:'q2e', number:'२ (ङ)', isHard:false, text:'जपामि', answer:{ answerKey:'अहं मन्त्रं जपामि।', schoolMethod:'अहं मन्त्रं जपामि।' } },
          { id:'q2f', number:'२ (च)', isHard:false, text:'करोमि', answer:{ answerKey:'अहं कार्यं करोमि।', schoolMethod:'अहं कार्यं करोमि।' } },
          { id:'q3', number:'३', isHard:false, text:'शिक्षकेण बालकैः सह सस्वरगानाय प्रयासः करणीयः।', answer:{ answerKey:'शिक्षकः बालकैः सह पाठस्य गीतं/श्लोकान् लय-ताल-सहितं सस्वरं गायेत्, बालकाश्च पुनः पुनः अभ्यसेयुः।', schoolMethod:'प्रक्रिया — (1) शिक्षकः प्रथमं स्वयं शुद्धम् उच्चारयेत्। (2) बालकाः समूहेषु तद् अनुकुर्वन्तु। (3) लय-ताल-सहितं पुनः पुनः गायनम्। (4) अशुद्धोच्चारणं तत्क्षणं संशोध्य पुनः अभ्यासः। एवं सस्वरगानेन पाठः कण्ठस्थः सुलभश्च भवति।' } },
        ]
      }
    ]
  },
  {
    id:'ch02', number:2, title:'मातामह्याः उपनेत्रम्', slug:'matamahyah-upanetram', code:'0904ir02', exercises:[
      {
        id: 's1', title: 'वयम् अभ्यासं कुर्मः',
        questions: [
          { id:'q1a', number:'१ (क)', isHard:false, text:'अधोलिखितानां प्रश्नानाम् उत्तराणि एकपदेन लिखत — कस्य अधः मुषुकः उपविष्टः आसीत्?', answer:{ answerKey:'वृक्षस्य।', schoolMethod:'वृक्षस्य।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'प्रसन्नाः कः मानवाः आसन्?', answer:{ answerKey:'बालकाः।', schoolMethod:'बालकाः।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'उपवने कस्य पादपौ मान्ये आस्ताम्?', answer:{ answerKey:'वृक्षस्य।', schoolMethod:'वृक्षस्य।' } },
          { id:'q1d', number:'१ (घ)', isHard:false, text:'मालवती प्रतिदिनं कस्य वार्तापत्रं पठति?', answer:{ answerKey:'सङ्गणकस्य (अथवा वार्तापत्रम्)।', schoolMethod:'सङ्गणकस्य (अथवा वार्तापत्रम्)।' } },
          { id:'q1e', number:'१ (ङ)', isHard:false, text:'उपवने भ्रमित्वा कः शोभनः दृश्यते स्म?', answer:{ answerKey:'उद्यानम् (अथवा मयूरः)।', schoolMethod:'उद्यानम् (अथवा मयूरः)।' } },
          { id:'q2a', number:'२ (क)', isHard:false, text:"अधोलिखितानि वाक्यानि पठित्वा 'आम्' 'न' वा लिखत — उपवने गत्वा मालवती प्रसन्नताम् अनुभवति स्म।", answer:{ answerKey:'आम्।', schoolMethod:'आम्।' } },
          { id:'q2b', number:'२ (ख)', isHard:false, text:'रमा कपाटिकायाम् उपवेष्टुम् अनिच्छन्ती।', answer:{ answerKey:'न।', schoolMethod:'न।' } },
          { id:'q2c', number:'२ (ग)', isHard:false, text:'वृक्षस्य अधः कुक्कुरः उपविष्टः आसीत्।', answer:{ answerKey:'न।', schoolMethod:'न।' } },
          { id:'q2d', number:'२ (घ)', isHard:false, text:'मुषुकस्य शशकस्य च मध्ये उपवनम् आसीत्।', answer:{ answerKey:'न।', schoolMethod:'न।' } },
          { id:'q2e', number:'२ (ङ)', isHard:false, text:'रमा उपवने स्वच्छवातावरणे अनिच्छन्ती।', answer:{ answerKey:'न।', schoolMethod:'न।' } },
          { id:'q2f', number:'२ (च)', isHard:false, text:'मालवती प्रतिदिनं प्रातः वार्तापत्रं न पठति।', answer:{ answerKey:'न।', schoolMethod:'न।' } },
          { id:'q3a', number:'३ (क)', isHard:false, text:'मञ्जूषातः उचितं शब्दं चित्वा विलोमशब्दान् लिखत — अधः', answer:{ answerKey:'उपरि।', schoolMethod:'अधः — उपरि।' } },
          { id:'q3b', number:'३ (ख)', isHard:false, text:'अन्तः', answer:{ answerKey:'बहिः।', schoolMethod:'अन्तः — बहिः।' } },
          { id:'q3c', number:'३ (ग)', isHard:false, text:'समीपम्', answer:{ answerKey:'दूरम्।', schoolMethod:'समीपम् — दूरम्।' } },
          { id:'q3d', number:'३ (घ)', isHard:false, text:'मन्दम्', answer:{ answerKey:'सत्वरम्।', schoolMethod:'मन्दम् — सत्वरम्।' } },
          { id:'q3e', number:'३ (ङ)', isHard:false, text:'प्रसन्ना', answer:{ answerKey:'दुःखिता।', schoolMethod:'प्रसन्ना — दुःखिता।' } },
        ]
      },
      {
        id: 's2', title: 'क्रियाकलापः',
        questions: [
          { id:'q1', number:'१', isHard:false, text:'भूमिकाभिनयः — त्रयः छात्राः ‘मातामही’, ‘रमा’, ‘मुनमुनः’ इति एतेषां भूमिकाः स्वीकुर्वन्तु। कथायाः प्रमुखसंवादान् संस्कृतभाषायां वदन्तु। अन्ते मुनमुनः उपनेत्रं धृत्वा हास्यदृश्यं प्रदर्शयेत्।', answer:{ answerKey:'त्रयः छात्राः तिस्रः भूमिकाः स्वीकृत्य कथायाः संवादान् संस्कृतेन अभिनयन्तु; अन्ते उपनेत्र-हास्यदृश्यम्।', schoolMethod:'प्रक्रिया — (1) त्रयः छात्राः मातामही-रमा-मुनमुन-भूमिकाः विभजन्तु। (2) कथायाः प्रमुखसंवादान् संस्कृतेन कण्ठस्थीकृत्य अभिनयन्तु। (3) अन्ते मुनमुनः उपनेत्रं धृत्वा हास्यदृश्यं प्रदर्शयेत्। संवादाः स्पष्टाः, अभिनयः सजीवः भवेत्।' } },
          { id:'q2', number:'२', isHard:false, text:'मम गृहस्य वस्तु-स्थान-सूचीं पूरयत\n\n<table style="border-collapse:collapse;width:100%;font-size:13px;margin:6px 0"><thead><tr><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">वस्तु</th><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">नियतस्थानम्</th></tr></thead><tbody><tr><td style="border:1px solid #cbd5e1;padding:6px 8px">पुस्तकम्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">______</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px">वस्त्रम्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">______</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px">स्यूतः</td><td style="border:1px solid #cbd5e1;padding:6px 8px">______</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px">पादत्राणम्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">______</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px">घटिका</td><td style="border:1px solid #cbd5e1;padding:6px 8px">______</td></tr></tbody></table>', answer:{ answerKey:'<table style="border-collapse:collapse;width:100%;font-size:13px;margin:6px 0"><thead><tr><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">वस्तु (Item)</th><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">नियतस्थानम् (Designated Place)</th></tr></thead><tbody><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>पुस्तकम्</strong> (Book)</td><td style="border:1px solid #cbd5e1;padding:6px 8px">उत्पीठिकायाम् (On the table)</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>वस्त्रम्</strong> (Clothes)</td><td style="border:1px solid #cbd5e1;padding:6px 8px">कपाटिकायाम् (In the cupboard)</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>स्यूतः</strong> (Bag)</td><td style="border:1px solid #cbd5e1;padding:6px 8px">उत्पीठिकायाम् / आसन्दे (On the table / On the chair)</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>पादत्राणम्</strong> (Footwear)</td><td style="border:1px solid #cbd5e1;padding:6px 8px">पादत्राणपट्टिकायाम् / द्वारे (In the shoe rack / At the door)</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>घटिका</strong> (Clock/Watch)</td><td style="border:1px solid #cbd5e1;padding:6px 8px">भित्तौ (On the wall)</td></tr></tbody></table>', schoolMethod:'<table style="border-collapse:collapse;width:100%;font-size:13px;margin:6px 0"><thead><tr><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">वस्तु (Item)</th><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">नियतस्थानम् (Designated Place)</th></tr></thead><tbody><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>पुस्तकम्</strong> (Book)</td><td style="border:1px solid #cbd5e1;padding:6px 8px">उत्पीठिकायाम् (On the table)</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>वस्त्रम्</strong> (Clothes)</td><td style="border:1px solid #cbd5e1;padding:6px 8px">कपाटिकायाम् (In the cupboard)</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>स्यूतः</strong> (Bag)</td><td style="border:1px solid #cbd5e1;padding:6px 8px">उत्पीठिकायाम् / आसन्दे (On the table / On the chair)</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>पादत्राणम्</strong> (Footwear)</td><td style="border:1px solid #cbd5e1;padding:6px 8px">पादत्राणपट्टिकायाम् / द्वारे (In the shoe rack / At the door)</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>घटिका</strong> (Clock/Watch)</td><td style="border:1px solid #cbd5e1;padding:6px 8px">भित्तौ (On the wall)</td></tr></tbody></table>' } },
        ]
      }
    ]
  },
  {
    id:'ch03', number:3, title:'नद्यः', slug:'nadyah', code:'0904ir03', exercises:[
      {
        id: 's1', title: 'वयम् अभ्यासं कुर्मः',
        questions: [
          { id:'q1a', number:'१ (क)', isHard:false, text:'अधोलिखितानां वाक्यानां पुरतः "सत्यम्/असत्यम्" वा लिखत — गोदावरी नदी पश्चिमसमुद्रं प्रति वहति।', answer:{ answerKey:'असत्यम्।', schoolMethod:'**असत्यम्**। गोदावरी नदी पूर्वसमुद्रं प्रति वहति।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'नद्यः कृषिकार्याय जलं प्रयच्छन्ति।', answer:{ answerKey:'सत्यम्।', schoolMethod:'**सत्यम्**।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'बन्धं निर्माय जलात् विद्युत् उत्पाद्यते।', answer:{ answerKey:'सत्यम्।', schoolMethod:'**सत्यम्**।' } },
          { id:'q1d', number:'१ (घ)', isHard:false, text:'सरस्वती नदी अद्यापि स्वपूर्णप्रवाहेण प्रवहन्ती दृश्यते।', answer:{ answerKey:'असत्यम्।', schoolMethod:'**असत्यम्**।' } },
          { id:'q1e', number:'१ (ङ)', isHard:false, text:'भारतवासिनः प्राचीनकालादेव नदीनां सम्मानं कुर्वन्ति।', answer:{ answerKey:'सत्यम्।', schoolMethod:'**सत्यम्**।' } },
          { id:'q2a', number:'२ (क)', isHard:false, text:'अधोलिखितानां प्रश्नानां पूर्णवाक्येन उत्तराणि लिखत — भारतस्य मध्यप्रान्ते के नद्यौ प्रसिद्धे स्तः?', answer:{ answerKey:'भारतस्य मध्यप्रान्ते नर्मदा ताप्ती च नद्यौ प्रसिद्धे स्तः।', schoolMethod:'भारतस्य मध्यप्रान्ते नर्मदा ताप्ती च नद्यौ प्रसिद्धे स्तः।' } },
          { id:'q2b', number:'२ (ख)', isHard:false, text:'काः नद्यः पूर्वसमुद्रं प्रति प्रवहन्ति?', answer:{ answerKey:'महानदी, गोदावरी, कृष्णा, कावेरी इत्यादयः नद्यः पूर्वसमुद्रं (बङ्गोपसागरं) प्रति प्रवहन्ति।', schoolMethod:'महानदी, गोदावरी, कृष्णा, कावेरी इत्यादयः नद्यः पूर्वसमुद्रं (बङ्गोपसागरं) प्रति प्रवहन्ति।' } },
          { id:'q2c', number:'२ (ग)', isHard:false, text:'हिमालय-शिखरेभ्यः काः नद्यः प्रभवन्ति?', answer:{ answerKey:'हिमालय-शिखरेभ्यः गङ्गा, यमुना, सिन्धुः, ब्रह्मपुत्रः इत्यादयः नद्यः प्रभवन्ति।', schoolMethod:'हिमालय-शिखरेभ्यः गङ्गा, यमुना, सिन्धुः, ब्रह्मपुत्रः इत्यादयः नद्यः प्रभवन्ति।' } },
          { id:'q2d', number:'२ (घ)', isHard:false, text:'पञ्चनदप्रान्ते काः काः नद्यः प्रवहन्ति?', answer:{ answerKey:'पञ्चनदप्रान्ते वितस्ता (Jhelum), चन्द्रभागा (Chenab), इरावती (Ravi), विपाशा (Beas), शतद्रुः (Sutlej) च नद्यः प्रवहन्ति।', schoolMethod:'पञ्चनदप्रान्ते वितस्ता (Jhelum), चन्द्रभागा (Chenab), इरावती (Ravi), विपाशा (Beas), शतद्रुः (Sutlej) च नद्यः प्रवहन्ति।' } },
          { id:'q2e', number:'२ (ङ)', isHard:false, text:'केन कृषिक्षेत्राणि प्लावितानि भवन्ति?', answer:{ answerKey:'नदीनां जलेन (अथवा कुल्याभिः) कृषिक्षेत्राणि प्लावितानि भवन्ति।', schoolMethod:'नदीनां जलेन (अथवा कुल्याभिः) कृषिक्षेत्राणि प्लावितानि भवन्ति।' } },
          { id:'q3', number:'३', isHard:false, text:'द्वयोः स्तम्भयोः मेलनं कुरुत —\nस्तम्भः क — कृषिः, बन्धः, जलाशयः, नदी, जलविद्युत्\nस्तम्भः ख — विद्युदुत्पादनम्, जलसञ्चयः, सेचनम्, मत्स्यानां निवासः, जलमूला विद्युत् (हाइड्रो-इलेक्ट्रिक पावर)', answer:{ answerKey:'क. कृषिः — ३. सेचनम्\nख. बन्धः — १. विद्युदुत्पादनम्\nग. जलाशयः — २. जलसञ्चयः\nघ. नदी — ४. मत्स्यानां निवासः\nङ. जलविद्युत् — ५. जलमूला विद्युत् (हाइड्रो-इलेक्ट्रिक पावर)', schoolMethod:'क. कृषिः — ३. सेचनम्\nख. बन्धः — १. विद्युदुत्पादनम्\nग. जलाशयः — २. जलसञ्चयः\nघ. नदी — ४. मत्स्यानां निवासः\nङ. जलविद्युत् — ५. जलमूला विद्युत् (हाइड्रो-इलेक्ट्रिक पावर)' } },
        ]
      },
      {
        id: 's2', title: 'क्रियाकलापः',
        questions: [
          { id:'q1', number:'१', isHard:false, text:'श्लोकस्य सस्वर-उच्चारणम्\n\nगङ्गे च यमुने चैव गोदावरि सरस्वति।\nनर्मदे सिन्धुकावेरी जलेऽस्मिन् सन्निधिं कुरु॥', answer:{ answerKey:'भावार्थः — हे गङ्गे, यमुने, गोदावरि, सरस्वति, नर्मदे, सिन्धु, कावेरी च! यूयं सर्वाः नद्यः अस्मिन् (मम स्नान-) जले सन्निहिताः भवत।\n\n(O holy rivers Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu and Kaveri! Please presence yourselves in this bathing water.)', schoolMethod:'भावार्थः — हे गङ्गे, यमुने, गोदावरि, सरस्वति, नर्मदे, सिन्धु, कावेरी च! यूयं सर्वाः नद्यः अस्मिन् (मम स्नान-) जले सन्निहिताः भवत।\n\nअर्थात् — हे पवित्राः गङ्गा, यमुना, गोदावरी, सरस्वती, नर्मदा, सिन्धुः, कावेरी च नद्यः! अस्मिन् स्नानजले स्वसान्निध्यं दत्त।\n\n(O holy rivers Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu and Kaveri! Please presence yourselves in this bathing water.)' } },
          { id:'q2', number:'२', isHard:false, text:'पाठे वर्णितानां नदीनां स्थानानि (भारतस्य मानचित्रे चिह्नितुम्) लिखत', answer:{ answerKey:'गङ्गा — उत्तरभारतस्य प्रमुखा नदी (उत्तरखण्डः, उत्तरप्रदेशः, बिहारः, पश्चिमबङ्गालः)।\nयमुना — गङ्गायाः प्रमुखा सहायकनदी (उत्तराखण्डतः प्रयागराजं यावत्)।\nगोदावरी — दक्षिणभारतस्य वृहद् नदी (महाराष्ट्रतः आन्ध्रप्रदेशं यावत्)।\nसरस्वती — प्राचीना लुप्तप्राया नदी (उत्तर-पश्चिमभारतः / राजस्थान-हरियाणा प्रान्तः)।\nनर्मदा — मध्यभारतस्य नदी (मध्यप्रदेशतः गुजरातं प्रति पश्चिमसमुद्रं गच्छति)।\nसिन्धुः — उत्तर-पश्चिमदिशि प्रवहन्ती नदी (लद्दाखतः पञ्चनदप्रान्तं प्रति)।\nकावेरी — दक्षिणभारतस्य नदी (कर्नाटकतः तमिलनाडु प्रान्तं यावत्)।', schoolMethod:'गङ्गा — उत्तरभारतस्य प्रमुखा नदी (उत्तरखण्डः, उत्तरप्रदेशः, बिहारः, पश्चिमबङ्गालः)।\nयमुना — गङ्गायाः प्रमुखा सहायकनदी (उत्तराखण्डतः प्रयागराजं यावत्)।\nगोदावरी — दक्षिणभारतस्य वृहद् नदी (महाराष्ट्रतः आन्ध्रप्रदेशं यावत्)।\nसरस्वती — प्राचीना लुप्तप्राया नदी (उत्तर-पश्चिमभारतः / राजस्थान-हरियाणा प्रान्तः)।\nनर्मदा — मध्यभारतस्य नदी (मध्यप्रदेशतः गुजरातं प्रति पश्चिमसमुद्रं गच्छति)।\nसिन्धुः — उत्तर-पश्चिमदिशि प्रवहन्ती नदी (लद्दाखतः पञ्चनदप्रान्तं प्रति)।\nकावेरी — दक्षिणभारतस्य नदी (कर्नाटकतः तमिलनाडु प्रान्तं यावत्)।' } },
        ]
      }
    ]
  },
  {
    id:'ch04', number:4, title:'नीतिवचनानि', slug:'nitivachanani', code:'0904ir04', exercises:[
      {
        id: 's1', title: 'वयम् अभ्यासं कुर्मः',
        questions: [
          { id:'q1a', number:'१ (क)', isHard:false, text:'एकपदेन उत्तरत — यौवनं धनसम्पत्तितः प्रभुत्वम् अविवेकिता च किमर्थं भवन्ति?', answer:{ answerKey:'अनर्थाय।', schoolMethod:'अनर्थाय।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'सात्त्विकं दानं कस्मै दीयते?', answer:{ answerKey:'अनुपकारिणे (अथवा पात्रे)।', schoolMethod:'अनुपकारिणे (अथवा पात्रे)।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'ग्रामस्यार्थे किं त्यजेत्?', answer:{ answerKey:'कुलम्।', schoolMethod:'कुलम्।' } },
          { id:'q1d', number:'१ (घ)', isHard:false, text:'मित्रद्रोही कुत्र गच्छति?', answer:{ answerKey:'नरकम्।', schoolMethod:'नरकम्।' } },
          { id:'q1e', number:'१ (ङ)', isHard:false, text:'सम्पत्तौ विपत्तौ च केषाम् एकरूपता भवति?', answer:{ answerKey:'महताम्।', schoolMethod:'महताम्।' } },
          { id:'q2a', number:'२ (क)', isHard:false, text:'पिटकातः चित्वा रिक्तस्थानानि पूरयत —\nपिटका — अविवेकिता, अनुपकारिणे, आत्मार्थे, अस्तमये, नरकम्\nयौवनं धनसम्पत्तितः प्रभुत्वम् ______।', answer:{ answerKey:'यौवनं धनसम्पत्तितः प्रभुत्वम् <u>अविवेकिता</u>।', schoolMethod:'यौवनं धनसम्पत्तितः प्रभुत्वम् <u>अविवेकिता</u>।' } },
          { id:'q2b', number:'२ (ख)', isHard:false, text:'दातव्यमिति यद्दानं दीयते ______।', answer:{ answerKey:'दातव्यमिति यद्दानं दीयते <u>अनुपकारिणे</u>।', schoolMethod:'दातव्यमिति यद्दानं दीयते <u>अनुपकारिणे</u>।' } },
          { id:'q2c', number:'२ (ग)', isHard:false, text:'ग्रामं जनपदस्यार्थे ______ पृथ्वीं त्यजेत्।', answer:{ answerKey:'ग्रामं जनपदस्यार्थे <u>आत्मार्थे</u> पृथ्वीं त्यजेत्।', schoolMethod:'ग्रामं जनपदस्यार्थे <u>आत्मार्थे</u> पृथ्वीं त्यजेत्।' } },
          { id:'q2d', number:'२ (घ)', isHard:false, text:'ते नराः ______ यान्ति।', answer:{ answerKey:'ते नराः <u>नरकं</u> यान्ति।', schoolMethod:'ते नराः <u>नरकं</u> यान्ति।' } },
          { id:'q2e', number:'२ (ङ)', isHard:false, text:'उदये सविता रक्तः रक्तश् च ______ यथा।', answer:{ answerKey:'उदये सविता रक्तः रक्तश् च <u>अस्तमये</u> यथा।', schoolMethod:'उदये सविता रक्तः रक्तश् च <u>अस्तमये</u> यथा।' } },
          { id:'q3', number:'३', isHard:false, text:'श्लोकांशान् मेलयत —\nक. यौवनं धनसम्पत्तितः, दातव्यमिति यद्दानम्, त्यजेदेकं कुलस्यार्थे, मित्रद्रोही कृतघ्नश् च, सम्पत्तौ च विपत्तौ च\n१. महताम् एकरूपता २. यश् च विश्वासघातकः ३. ग्रामस्यार्थे कुलं त्यजेत् ४. दीयतेऽनुपकारिणे ५. प्रभुत्वम् अविवेकिता', answer:{ answerKey:'क. यौवनं धनसम्पत्तितः — ५. प्रभुत्वमविवेकिता\nख. दातव्यमिति यद्दानम् — ४. दीयतेऽनुपकारिणे\nग. त्यजेदेकं कुलस्यार्थे — ३. ग्रामस्यार्थे कुलं त्यजेत्\nघ. मित्रद्रोही कृतघ्नश्च — २. यश्च विश्वासघातकः\nङ. सम्पत्तौ च विपत्तौ च — १. महतामेकरूपता', schoolMethod:'क. यौवनं धनसम्पत्तितः — ५. प्रभुत्वमविवेकिता\nख. दातव्यमिति यद्दानम् — ४. दीयतेऽनुपकारिणे\nग. त्यजेदेकं कुलस्यार्थे — ३. ग्रामस्यार्थे कुलं त्यजेत्\nघ. मित्रद्रोही कृतघ्नश्च — २. यश्च विश्वासघातकः\nङ. सम्पत्तौ च विपत्तौ च — १. महतामेकरूपता' } },
        ]
      },
      {
        id: 's2', title: 'क्रियाकलापः',
        questions: [
          { id:'q1', number:'१', isHard:false, text:'दानस्य अनुभवः — परोपकारस्य कस्यचित् अनुभवम् एकानुच्छेदेन लिखत', answer:{ answerKey:'यदा अहं स्वमित्रेभ्यः लेखनीं पुस्तकं च अयच्छम्, तदा मम मनसि अतीव प्रसन्नता अभवत्। परोपकारेण सहकारेन च आत्मनः आनन्दः लभ्यते। दानं मनुष्यस्य उत्तमः गुणः अस्ति, येन समाजे स्नेहः वर्धते।\n\n(When I shared my pen and book with my friends, I felt immense joy. Helping and sharing brings inner happiness. Giving is a noble virtue that fosters love and brotherhood in society.)', schoolMethod:'यदा अहं स्वमित्रेभ्यः लेखनीं पुस्तकं च अयच्छम्, तदा मम मनसि अतीव प्रसन्नता अभवत्। परोपकारेण सहकारेन च आत्मनः आनन्दः लभ्यते। दानं मनुष्यस्य उत्तमः गुणः अस्ति, येन समाजे स्नेहः वर्धते।\n\n(When I shared my pen and book with my friends, I felt immense joy. Helping and sharing brings inner happiness. Giving is a noble virtue that fosters love and brotherhood in society.)' } },
          { id:'q2', number:'२', isHard:false, text:'मूल्यवृक्षः — वृक्षस्य शाखासु लेखनीयानि मूल्यानि लिखत', answer:{ answerKey:'सत्यम् (Truth)\nकृतज्ञता (Gratitude)\nमित्रता (Friendship)\nसहयोगः (Cooperation)\nविश्वासः (Trust)', schoolMethod:'सत्यम् (Truth)\nकृतज्ञता (Gratitude)\nमित्रता (Friendship)\nसहयोगः (Cooperation)\nविश्वासः (Trust)' } },
          { id:'q3', number:'३', isHard:false, text:'समाजहिताय त्यागिनः महापुरुषान् लिखत', answer:{ answerKey:'सुभाषचन्द्रबोसः (Subhas Chandra Bose)\nमहात्मागान्धी (Mahatma Gandhi)\nभगतसिंहः (Bhagat Singh)\nस्वामी विवेकानन्दः (Swami Vivekananda)\nछत्रपति शिवाजी महाराजः (Chhatrapati Shivaji Maharaj)\nसरदार वल्लभभाई पटेलः (Sardar Vallabhbhai Patel)', schoolMethod:'सुभाषचन्द्रबोसः (Subhas Chandra Bose)\nमहात्मागान्धी (Mahatma Gandhi)\nभगतसिंहः (Bhagat Singh)\nस्वामी विवेकानन्दः (Swami Vivekananda)\nछत्रपति शिवाजी महाराजः (Chhatrapati Shivaji Maharaj)\nसरदार वल्लभभाई पटेलः (Sardar Vallabhbhai Patel)' } },
        ]
      }
    ]
  },
  {
    id:'ch05', number:5, title:'दानवीरः कर्णः', slug:'danavirah-karnah', code:'0904ir05', exercises:[
      {
        id: 's1', title: 'वयम् अभ्यासं कुर्मः',
        questions: [
          { id:'q1a', number:'१ (क)', isHard:false, text:'एकपदेन उत्तरत — ब्राह्मणवेषधारी कः प्रविशति?', answer:{ answerKey:'शक्रः (इन्द्रः)।', schoolMethod:'शक्रः (इन्द्रः)।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'शक्रः कं भिक्षां याचते?', answer:{ answerKey:'कर्णम्।', schoolMethod:'कर्णम्।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'कर्णः प्रथमं किं दातुम् इच्छति?', answer:{ answerKey:'गोसहस्रम् (सहस्रं गाः)।', schoolMethod:'गोसहस्रम् (सहस्रं गाः)।' } },
          { id:'q1d', number:'१ (घ)', isHard:false, text:'कालपर्यात् का क्षयं गच्छति?', answer:{ answerKey:'शिक्षा।', schoolMethod:'शिक्षा।' } },
          { id:'q1e', number:'१ (ङ)', isHard:false, text:'कः कर्णं वारयति?', answer:{ answerKey:'शल्यः।', schoolMethod:'शल्यः।' } },
          { id:'q2', number:'२', isHard:false, text:'उचितं पर्यायं मेलयत —\n१. वृक्षाः २. शक्रः ३. स्वर्णम् ४. वाजिनः ५. अङ्गराजः\nक. अश्वाः ख. पादपाः ग. कनकम् घ. कर्णः ङ. इन्द्रः', answer:{ answerKey:'१. वृक्षाः — ख. पादपाः\n२. शक्रः — ङ. इन्द्रः\n३. स्वर्णम् — ग. कनकम्\n४. वाजिनः — क. अश्वाः\n५. अङ्गराजः — घ. कर्णः', schoolMethod:'१. वृक्षाः — ख. पादपाः\n२. शक्रः — ङ. इन्द्रः\n३. स्वर्णम् — ग. कनकम्\n४. वाजिनः — क. अश्वाः\n५. अङ्गराजः — घ. कर्णः' } },
          { id:'q3a', number:'३ (क)', isHard:false, text:'प्रथमपुरुषस्य क्रियापदानि उत्तमपुरुषे परिवर्तयत — करोति → ______', answer:{ answerKey:'करोमि।', schoolMethod:'करोति → करोमि।' } },
          { id:'q3b', number:'३ (ख)', isHard:false, text:'ददाति → ______', answer:{ answerKey:'ददामि।', schoolMethod:'ददाति → ददामि।' } },
          { id:'q3c', number:'३ (ग)', isHard:false, text:'इच्छति → ______', answer:{ answerKey:'इच्छामि।', schoolMethod:'इच्छति → इच्छामि।' } },
          { id:'q3d', number:'३ (घ)', isHard:false, text:'गच्छति → ______', answer:{ answerKey:'गच्छामि।', schoolMethod:'गच्छति → गच्छामि।' } },
          { id:'q3e', number:'३ (ङ)', isHard:false, text:'हसति → ______', answer:{ answerKey:'हसामि।', schoolMethod:'हसति → हसामि।' } },
        ]
      },
      {
        id: 's2', title: 'क्रियाकलापः',
        questions: [
          { id:'q1', number:'१', isHard:false, text:'श्लोकस्य अर्थः —\n\nशिक्षा क्षयं गच्छति कालपर्यायात्\nसुबद्धमूला निपतन्ति पादपाः।\nजलं जलस्थानगतं च शुष्यति\nहुतं च दत्तं च तथैव तिष्ठति॥', answer:{ answerKey:'अर्थः — कालेन सह शिक्षा नश्यति, सुदृढमूलाः वृक्षाः अपि निपतन्ति, जलाशये स्थितं जलम् अपि शुष्यति। परन्तु या आहुतिः दत्ता, यच्च दानं दत्तम्, तत् तथैव तिष्ठति (तस्य फलम् सर्वदा तिष्ठति)।\n\n(With the passage of time, learning fades, deeply rooted trees fall, and water stored in reservoirs dries up. However, the sacrifices made and the charity given remain forever undiminished.)', schoolMethod:'अर्थः — कालेन सह शिक्षा नश्यति, सुदृढमूलाः वृक्षाः अपि निपतन्ति, जलाशये स्थितं जलम् अपि शुष्यति। परन्तु या आहुतिः दत्ता, यच्च दानं दत्तम्, तत् तथैव तिष्ठति (तस्य फलम् सर्वदा तिष्ठति)।\n\n(With the passage of time, learning fades, deeply rooted trees fall, and water stored in reservoirs dries up. However, the sacrifices made and the charity given remain forever undiminished.)' } },
          { id:'q3', number:'३', isHard:false, text:"'अस्मद्' (उत्तमपुरुष) शब्दस्य सर्वाणि रूपाणि लिखत", answer:{ answerKey:'<table style="border-collapse:collapse;width:100%;font-size:13px;margin:6px 0"><thead><tr><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">विभक्तिः</th><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">एकवचनम्</th><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">द्विवचनम्</th><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">बहुवचनम्</th></tr></thead><tbody><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>प्रथमा</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">अहम्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवाम्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">वयम्</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>द्वितीया</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">माम् / मा</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवाम् / नौ</td><td style="border:1px solid #cbd5e1;padding:6px 8px">अस्मान् / नः</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>तृतीया</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">मया</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवाभ्याम्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">अस्माभिः</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>चतुर्थी</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">मह्यम् / मे</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवाभ्याम् / नौ</td><td style="border:1px solid #cbd5e1;padding:6px 8px">अस्मभ्यम् / नः</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>पञ्चमी</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">मत्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवाभ्याम्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">अस्मत्</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>षष्ठी</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">मम / मे</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवयोः / नौ</td><td style="border:1px solid #cbd5e1;padding:6px 8px">अस्माकम् / नः</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>सप्तमी</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">मयि</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवयोः</td><td style="border:1px solid #cbd5e1;padding:6px 8px">अस्मासु</td></tr></tbody></table>', schoolMethod:'<table style="border-collapse:collapse;width:100%;font-size:13px;margin:6px 0"><thead><tr><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">विभक्तिः</th><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">एकवचनम्</th><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">द्विवचनम्</th><th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:left">बहुवचनम्</th></tr></thead><tbody><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>प्रथमा</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">अहम्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवाम्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">वयम्</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>द्वितीया</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">माम् / मा</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवाम् / नौ</td><td style="border:1px solid #cbd5e1;padding:6px 8px">अस्मान् / नः</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>तृतीया</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">मया</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवाभ्याम्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">अस्माभिः</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>चतुर्थी</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">मह्यम् / मे</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवाभ्याम् / नौ</td><td style="border:1px solid #cbd5e1;padding:6px 8px">अस्मभ्यम् / नः</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>पञ्चमी</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">मत्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवाभ्याम्</td><td style="border:1px solid #cbd5e1;padding:6px 8px">अस्मत्</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>षष्ठी</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">मम / मे</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवयोः / नौ</td><td style="border:1px solid #cbd5e1;padding:6px 8px">अस्माकम् / नः</td></tr><tr><td style="border:1px solid #cbd5e1;padding:6px 8px"><strong>सप्तमी</strong></td><td style="border:1px solid #cbd5e1;padding:6px 8px">मयि</td><td style="border:1px solid #cbd5e1;padding:6px 8px">आवयोः</td><td style="border:1px solid #cbd5e1;padding:6px 8px">अस्मासु</td></tr></tbody></table>' } },
          { id:'qk1', number:'४', isHard:false, text:'अधोलिखितं श्लोकं सस्वरं गायत, अर्थविषये च सहपाठिभिः सह चर्चा कुरुत।', answer:{ answerKey:'श्लोकं लय-सहितं सस्वरं गायन्तु; ततः तस्य अर्थं सहपाठिभिः सह चर्चयन्तु।', schoolMethod:'प्रक्रिया — (1) श्लोकस्य शुद्धोच्चारणं लय-सहितम् अभ्यस्यत। (2) वर्गे सस्वरं गायत। (3) प्रत्येकपङ्क्तेः अर्थं सहपाठिभिः सह चर्चयन्तु — कर्णस्य दानवीरता, शक्रस्य परीक्षा, सत्यवचनस्य महत्त्वं च स्पष्टीकुरुत।' } },
          { id:'qk2', number:'५', isHard:false, text:'द्वौ छात्रौ मिलित्वा कर्णशक्रयोः संवादस्य ध्वन्यङ्कनं कृत्वा कक्षायां श्रावयताम्।', answer:{ answerKey:'द्वौ छात्रौ कर्ण-शक्र-भूमिके स्वीकृत्य संवादं ध्वन्यङ्कयेताम्, कक्षायां च श्रावयेताम्।', schoolMethod:'प्रक्रिया — (1) द्वौ छात्रौ कर्ण-शक्र-भूमिके विभजेताम्। (2) पाठाधारेण संवादं सज्जीकुरुताम्। (3) ध्वनिमुद्रणं (मोबाइल-यन्त्रेण) कृत्वा कक्षायां श्रावयेताम्। उच्चारणं स्पष्टं, भावानुकूलं च भवेत्।' } },
        ]
      }
    ]
  },
  {
    id:'ch06', number:6, title:'न गङ्गदत्तः पुनरेति कूपम्', slug:'na-gangadattah-punareti-kupam', code:'0904ir06', exercises:[
      {
        id: 's1', title: 'वयम् अभ्यासं कुर्मः',
        questions: [
          { id:'q1a', number:'१ (क)', isHard:false, text:'अधोलिखितानां प्रश्नानाम् एकपदेन उत्तरत — गङ्गाम् उभयतः के आसन्?', answer:{ answerKey:'भेकाः (अथवा मण्डूकाः)।', schoolMethod:'भेकाः (अथवा मण्डूकाः)।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'कूपे कः निवसति स्म?', answer:{ answerKey:'गङ्गदत्तः।', schoolMethod:'गङ्गदत्तः।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'गङ्गदत्तस्य दुर्व्यवहारेण के रुष्टाः अभवन्?', answer:{ answerKey:'ज्ञातयः (अथवा बान्धवाः / भेकाः)।', schoolMethod:'ज्ञातयः (अथवा बान्धवाः / भेकाः)।' } },
          { id:'q1d', number:'१ (घ)', isHard:false, text:'कूपात् बहिः आगत्य गङ्गदत्तः कस्य समीपं गतः?', answer:{ answerKey:'सर्पस्य (प्रियदर्शनस्य)।', schoolMethod:'सर्पस्य (प्रियदर्शनस्य)।' } },
          { id:'q1e', number:'१ (ङ)', isHard:false, text:'सर्वान् भेकान् कः अभक्षयत्?', answer:{ answerKey:'सर्पः (प्रियदर्शनः)।', schoolMethod:'सर्पः (प्रियदर्शनः)।' } },
          { id:'q2a', number:'२ (अ-क)', isHard:false, text:'पिटकातः अव्ययपदानि चित्वा रिक्तस्थानानि पूरयत —\nपिटका — विना, बहिः, प्रतिदिनम्, पुनः, क्व, ततः\nपरिश्रमं ______ न सुखम्।', answer:{ answerKey:'परिश्रमं <u>विना</u> न सुखम्।', schoolMethod:'परिश्रमं <u>विना</u> न सुखम्।' } },
          { id:'q2b', number:'२ (अ-ख)', isHard:false, text:'सर्पः ______ पलायितः।', answer:{ answerKey:'सर्पः <u>बहिः</u> पलायितः।', schoolMethod:'सर्पः <u>बहिः</u> पलायितः।' } },
          { id:'q2c', number:'२ (अ-ग)', isHard:false, text:'छात्रः ______ विद्यालयं गच्छति।', answer:{ answerKey:'छात्रः <u>प्रतिदिनम्</u> विद्यालयं गच्छति।', schoolMethod:'छात्रः <u>प्रतिदिनम्</u> विद्यालयं गच्छति।' } },
          { id:'q2d', number:'२ (अ-घ)', isHard:false, text:'______ ते निवासः?', answer:{ answerKey:'<u>क्व</u> ते निवासः?', schoolMethod:'<u>क्व</u> ते निवासः?' } },
          { id:'q2e', number:'२ (अ-ङ)', isHard:false, text:'वर्षाकाले ______ मा गच्छ।', answer:{ answerKey:'वर्षाकाले <u>ततः</u> मा गच्छ।', schoolMethod:'वर्षाकाले <u>ततः</u> मा गच्छ।' } },
          { id:'q2f', number:'२ (अ-च)', isHard:false, text:'गङ्गदत्तः कूपम् न ______ एति।', answer:{ answerKey:'गङ्गदत्तः कूपम् न <u>पुनः</u> एति।', schoolMethod:'गङ्गदत्तः कूपम् न <u>पुनः</u> एति।' } },
          { id:'q2g', number:'२ (ब-क)', isHard:false, text:'कोष्ठकात् उचितं शब्दं चित्वा रिक्तस्थानानि पूरयत — ______ उभयतः वृक्षाः भवन्ति। (मार्गम् / मार्गे / मार्गस्य)', answer:{ answerKey:'<u>मार्गम्</u> उभयतः वृक्षाः भवन्ति।', schoolMethod:'<u>मार्गम्</u> उभयतः वृक्षाः भवन्ति।' } },
          { id:'q2h', number:'२ (ब-ख)', isHard:false, text:'वर्षाकाले ______ बहिः गन्तुं न शक्यम्। (गृहस्य / गृहात् / गृहे)', answer:{ answerKey:'वर्षाकाले <u>गृहात्</u> बहिः गन्तुं न शक्यम्।', schoolMethod:'वर्षाकाले <u>गृहात्</u> बहिः गन्तुं न शक्यम्।' } },
          { id:'q2i', number:'२ (ब-ग)', isHard:false, text:'______ सह गमनं न युक्तम्। (दुष्टेन / दुष्टस्य / दुष्टेभ्यः)', answer:{ answerKey:'<u>दुष्टेन</u> सह गमनं न युक्तम्।', schoolMethod:'<u>दुष्टेन</u> सह गमनं न युक्तम्।' } },
          { id:'q3', number:'३', isHard:false, text:'अधोलिखितानां परस्परं मेलनं कृत्वा रिक्तस्थानानि पूरयन्तु —\nक. मण्डूकः ख. सखा ग. तडागः घ. अपमानः ङ. रुष्टः\nजलाशयः, पराभवः, भेकः, क्रुद्धः, मित्रम्', answer:{ answerKey:'क. मण्डूकः — भेकः\nख. सखा — मित्रम्\nग. तडागः — जलाशयः\nघ. अपमानः — पराभवः\nङ. रुष्टः — क्रुद्धः', schoolMethod:'क. मण्डूकः — भेकः\nख. सखा — मित्रम्\nग. तडागः — जलाशयः\nघ. अपमानः — पराभवः\nङ. रुष्टः — क्रुद्धः' } },
        ]
      },
      {
        id: 's2', title: 'क्रियाकलापः',
        questions: [
          { id:'q1', number:'१', isHard:false, text:'स्वस्य प्रियवस्तुनः मित्रस्य वा विषये पञ्चवाक्यानि लिखत', answer:{ answerKey:'क. मम मित्रस्य नाम आदित्यः अस्ति। (My friend\'s name is Aditya.)\nख. सः अतीव चतुरः दयालुः च अस्ति। (He is very clever and kind.)\nग. वयम् उभौ सह पाठशालां गच्छावः। (We both go to school together.)\nघ. सः पठने क्रीडने च मम सहायतां करोति। (He helps me in studies and sports.)\nङ. तस्य व्यवहारः अतीव मधुरः सरसः च अस्ति। (His behavior is very sweet and pleasant.)', schoolMethod:'क. मम मित्रस्य नाम आदित्यः अस्ति। (My friend\'s name is Aditya.)\nख. सः अतीव चतुरः दयालुः च अस्ति। (He is very clever and kind.)\nग. वयम् उभौ सह पाठशालां गच्छावः। (We both go to school together.)\nघ. सः पठने क्रीडने च मम सहायतां करोति। (He helps me in studies and sports.)\nङ. तस्य व्यवहारः अतीव मधुरः सरसः च अस्ति। (His behavior is very sweet and pleasant.)' } },
          { id:'q2', number:'२', isHard:false, text:'श्लोकस्य अर्थः भावार्थः च —\n\nबुभुक्षितः किं न करोति पापं, क्षीणजनाः निष्करुणा भवन्ति।\nआख्याहि भद्रे प्रियदर्शनाय, न गङ्गदत्तः पुनरेति कूपम्॥', answer:{ answerKey:'भावार्थः — क्षुधितः (बुभुक्षितः) जनः स्वस्य उदरपूरणाय किमपि पापं कर्तुं समर्थः भवति। निर्बलाः अथवा दुर्बलाः जनाः प्रायः दयाहीनाः भवन्ति। हे भद्रे! प्रियदर्शनम् (सर्पम्) कथय यत् गङ्गदत्तः पुनः तं कूपं कदापि न आगमिष्यति।\n\n(A hungry person can commit any sin to satisfy their hunger, and weak people can become pitiless. O good one, go and tell Priyadarshana that Gangadatta will never return to that well again.)', schoolMethod:'भावार्थः — क्षुधितः (बुभुक्षितः) जनः स्वस्य उदरपूरणाय किमपि पापं कर्तुं समर्थः भवति। निर्बलाः अथवा दुर्बलाः जनाः प्रायः दयाहीनाः भवन्ति। हे भद्रे! प्रियदर्शनम् (सर्पम्) कथय यत् गङ्गदत्तः पुनः तं कूपं कदापि न आगमिष्यति।\n\n(A hungry person can commit any sin to satisfy their hunger, and weak people can become pitiless. O good one, go and tell Priyadarshana that Gangadatta will never return to that well again.)' } },
          { id:'q3', number:'३', isHard:false, text:'अस्मिन् पाठे यानि क्रियापदानि प्रयुक्तानि सन्ति, तानि लिखत', answer:{ answerKey:'क. निवसति\nख. अगच्छत् / गच्छति\nग. अभक्षयत्\nघ. करोति\nङ. वदति\nच. आगच्छति\nछ. कथयति\nज. एति (आगच्छति/गच्छति)', schoolMethod:'क. निवसति\nख. अगच्छत् / गच्छति\nग. अभक्षयत्\nघ. करोति\nङ. वदति\nच. आगच्छति\nछ. कथयति\nज. एति (आगच्छति/गच्छति)' } },
        ]
      }
    ]
  },
  {
    id:'ch07', number:7, title:'विद्यामहिमा', slug:'vidyamahima', code:'0904ir07', exercises:[
      {
        id: 's1', title: 'वयम् अभ्यासं कुर्मः',
        questions: [
          { id:'q1a', number:'१ (क)', isHard:false, text:'अधोलिखितानां प्रश्नानाम् एकपदेन उत्तरत — विद्या किं ददाति?', answer:{ answerKey:'विनयम्।', schoolMethod:'विनयम्।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'कस्मात् पात्रतां याति?', answer:{ answerKey:'विनयात्।', schoolMethod:'विनयात्।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'राजा कुत्र पूज्यते?', answer:{ answerKey:'स्वदेशे।', schoolMethod:'स्वदेशे।' } },
          { id:'q1d', number:'१ (घ)', isHard:false, text:'विद्वान् कुत्र पूज्यते?', answer:{ answerKey:'सर्वत्र।', schoolMethod:'सर्वत्र।' } },
          { id:'q1e', number:'१ (ङ)', isHard:false, text:'कस्य कोशः अपूर्वः अस्ति?', answer:{ answerKey:'भारत्याः (सरस्वत्याः)।', schoolMethod:'भारत्याः (सरस्वत्याः)।' } },
          { id:'q2a', number:'२ (क)', isHard:false, text:'रिक्तस्थानानि पूरयत — न भ्रातृभाज्यं न च ______।', answer:{ answerKey:'न भ्रातृभाज्यं न च <u>राजहार्यम्</u>।', schoolMethod:'न भ्रातृभाज्यं न च <u>राजहार्यम्</u>।' } },
          { id:'q2b', number:'२ (ख)', isHard:false, text:'विनयाद् याति ______।', answer:{ answerKey:'विनयाद् याति <u>पात्रताम्</u>।', schoolMethod:'विनयाद् याति <u>पात्रताम्</u>।' } },
          { id:'q2c', number:'२ (ग)', isHard:false, text:'अपूर्वः कोऽपि ______ विद्यते तव भारति।', answer:{ answerKey:'अपूर्वः कोऽपि <u>कोशोऽयं</u> विद्यते तव भारति।', schoolMethod:'अपूर्वः कोऽपि <u>कोशोऽयं</u> विद्यते तव भारति।' } },
          { id:'q2d', number:'२ (घ)', isHard:false, text:'व्ययतो वृद्धिमायाति ______ सञ्चयात्।', answer:{ answerKey:'व्ययतो वृद्धिमायाति <u>क्षयमायाति</u> सञ्चयात्।', schoolMethod:'व्ययतो वृद्धिमायाति <u>क्षयमायाति</u> सञ्चयात्।' } },
          { id:'q2e', number:'२ (ङ)', isHard:false, text:'विद्वत्त्वं च ______ च नैव तुल्ये कदाचन।', answer:{ answerKey:'विद्वत्त्वं च <u>नृपत्वं</u> च नैव तुल्ये कदाचन।', schoolMethod:'विद्वत्त्वं च <u>नृपत्वं</u> च नैव तुल्ये कदाचन।' } },
          { id:'q3a', number:'३ (क)', isHard:false, text:'अधोलिखितानि वाक्यानि बहुवचने परिवर्तयत — विद्यते → ______', answer:{ answerKey:'विद्यन्ते।', schoolMethod:'विद्यते → विद्यन्ते।' } },
          { id:'q3b', number:'३ (ख)', isHard:false, text:'याति → ______', answer:{ answerKey:'यान्ति।', schoolMethod:'याति → यान्ति।' } },
          { id:'q3c', number:'३ (ग)', isHard:false, text:'वर्धते → ______', answer:{ answerKey:'वर्धन्ते।', schoolMethod:'वर्धते → वर्धन्ते।' } },
          { id:'q3d', number:'३ (घ)', isHard:false, text:'पूज्यते → ______', answer:{ answerKey:'पूज्यन्ते।', schoolMethod:'पूज्यते → पूज्यन्ते।' } },
          { id:'q3e', number:'३ (ङ)', isHard:false, text:'उच्यते → ______', answer:{ answerKey:'उच्यन्ते।', schoolMethod:'उच्यते → उच्यन्ते।' } },
        ]
      },
      {
        id: 's2', title: 'क्रियाकलापः',
        questions: [
          { id:'a3', number:'अ-३', isHard:false, text:'"विद्याधनं सर्वधनप्रधानम्" — स्वविचारम् (2-3 वाक्यैः लिखत)', answer:{ answerKey:'विद्यायाः हरणं कोऽपि चोरः कर्तुं न शक्नोति। (No thief can steal knowledge.)\nएतत् धनं व्यये कृते वर्धते, न तु क्षीयते। (This wealth grows when spent, rather than diminishing.)\nअतः विद्याधनं सर्वेषु धनेषु श्रेष्ठं वर्तते। (Therefore, the wealth of knowledge is superior to all other forms of wealth.)', schoolMethod:'विद्यायाः हरणं कोऽपि चोरः कर्तुं न शक्नोति। (No thief can steal knowledge.)\nएतत् धनं व्यये कृते वर्धते, न तु क्षीयते। (This wealth grows when spent, rather than diminishing.)\nअतः विद्याधनं सर्वेषु धनेषु श्रेष्ठं वर्तते। (Therefore, the wealth of knowledge is superior to all other forms of wealth.)' } },
          { id:'b1a', number:'ब-१ (क)', isHard:false, text:'विद्याधनं ______ अस्ति। (सर्वधनप्रधानम् / भारकारि)', answer:{ answerKey:'विद्याधनं <u>सर्वधनप्रधानम्</u> अस्ति।', schoolMethod:'विद्याधनं <u>सर्वधनप्रधानम्</u> अस्ति।' } },
          { id:'b1b', number:'ब-१ (ख)', isHard:false, text:'विद्या सञ्चयात् ______ याति। (क्षयम् / वृद्धिम्)', answer:{ answerKey:'विद्या सञ्चयात् <u>क्षयम्</u> याति।', schoolMethod:'विद्या सञ्चयात् <u>क्षयम्</u> याति।' } },
          { id:'b1c', number:'ब-१ (ग)', isHard:false, text:'विद्वान् ______ पूज्यते। (स्वदेशे / सर्वत्र)', answer:{ answerKey:'विद्वान् <u>सर्वत्र</u> पूज्यते।', schoolMethod:'विद्वान् <u>सर्वत्र</u> पूज्यते।' } },
          { id:'b2', number:'ब-२', isHard:false, text:'विशेष्य-विशेषणमेलनम् (उचितं मेलनं कुरुत) —\nक. अपूर्वः ख. सर्वधनप्रधानम् ग. गुप्तम्\n१. धनम् २. कोशः ३. विद्या', answer:{ answerKey:'क. अपूर्वः — (२) कोशः\nख. सर्वधनप्रधानम् — (१) धनम्\nग. गुप्तम् — (३) विद्या', schoolMethod:'क. अपूर्वः — (२) कोशः\nख. सर्वधनप्रधानम् — (१) धनम्\nग. गुप्तम् — (३) विद्या' } },
          { id:'b3a', number:'ब-३ (क)', isHard:false, text:"दत्तानि कथनानि पठित्वा सम्मुखे कोष्ठके 'आम्' (असत्यम्/न) लिखन्तु — विद्यारूपि धनं भ्रातृभाज्यम् अस्ति।", answer:{ answerKey:'न।', schoolMethod:'**न**।' } },
          { id:'b3b', number:'ब-३ (ख)', isHard:false, text:'विद्याधनं व्यये कृते न्यूनं भवति।', answer:{ answerKey:'न।', schoolMethod:'**न**।' } },
          { id:'b3c', number:'ब-३ (ग)', isHard:false, text:'राजा केवलं स्वदेशे एव पूज्यते।', answer:{ answerKey:'आम्।', schoolMethod:'**आम्**।' } },
          { id:'a1', number:'अ-१', isHard:false, text:'शिक्षकाः पाठे आगतान् श्लोकान् लयेन गायन्तु, तेषु प्रश्नान् च पृच्छन्तु।', answer:{ answerKey:'शिक्षकः श्लोकान् लय-सहितं गायेत्, छात्रेभ्यः तदाधारितान् प्रश्नान् च पृच्छेत्।', schoolMethod:'प्रक्रिया — (1) शिक्षकः प्रत्येकं श्लोकं लय-ताल-सहितं सस्वरं गायेत्। (2) छात्राः अनुकुर्वन्तु। (3) शिक्षकः शब्दार्थ-भावार्थ-व्याकरण-विषयान् प्रश्नान् पृच्छेत्। एवं श्रवण-पठन-अवबोधनं त्रिविधं सिध्यति।' } },
          { id:'a2', number:'अ-२', isHard:false, text:'छात्राः ‘विद्या-महिमा’ इति पाठस्य श्लोकान् सस्वरं (लय-ताल-सहितम्) शुद्धम् उच्चारणं करिष्यन्ति।', answer:{ answerKey:'छात्राः सर्वान् श्लोकान् लय-ताल-सहितं शुद्धोच्चारणेन सस्वरं पठन्तु।', schoolMethod:'प्रक्रिया — (1) प्रत्येकः श्लोकः पदान्वय-सहितं पठ्यताम्। (2) लय-ताल-रक्षा, वर्णोच्चारण-शुद्धिः च ध्येया। (3) समूहगायनेन कण्ठस्थीकरणं सुकरं भवति। अशुद्धपाठः तत्क्षणं संशोधनीयः।' } },
          { id:'a4', number:'अ-४', isHard:false, text:'शिक्षकः श्लोकेषु आगतानां शब्दार्थानाम् उपरि कक्षायां छात्रैः सह प्रतियोगिता कारयेत्।', answer:{ answerKey:'शब्दार्थ-प्रतियोगिता — शिक्षकः शब्दं वदेत्, छात्राः शीघ्रम् अर्थं वदन्तु; अङ्काः दीयन्ताम्।', schoolMethod:'प्रक्रिया — (1) शिक्षकः श्लोकशब्दं वदति। (2) यः छात्रः प्रथमं शुद्धम् अर्थं वदति, सः अङ्कं लभते। (3) अन्ते विजेतारः घोष्यन्ताम्। एवं शब्दार्थाः क्रीडया कण्ठस्थाः भवन्ति।' } },
          { id:'a5', number:'अ-५', isHard:false, text:'शिक्षकः श्लोकस्य अर्धपङ्क्तिं वदिष्यति, छात्राः च अग्रिमां पङ्क्तिं मौखिकरूपेण पूरयिष्यन्ति (यथा — “व्यये कृते वर्धते एव नित्यम्...” → “...विद्याधनं सर्वधनप्रधानम्”)।', answer:{ answerKey:'अर्धपङ्क्ति-पूरण-क्रीडा — शिक्षकः पूर्वार्धं वदेत्, छात्राः उत्तरार्धं स्मृत्वा वदन्तु।', schoolMethod:'प्रक्रिया — (1) शिक्षकः श्लोकस्य पूर्वार्धं वदति। (2) छात्राः स्मरणात् उत्तरार्धं पूर्णं वदन्ति। (3) यथा — “व्यये कृते वर्धते एव नित्यम्...” → “...विद्याधनं सर्वधनप्रधानम्”। एवं श्लोकाः दृढं कण्ठस्थाः भवन्ति।' } },
        ]
      }
    ]
  },
  {
    id:'ch08', number:8, title:'बिलस्य वाणी न कदापि मे श्रुता', slug:'bilasya-vani-na-kadapi-me-shruta', code:'0904ir08', exercises:[
      {
        id: 's1', title: 'वयम् अभ्यासं कुर्मः',
        questions: [
          { id:'q1a', number:'१ (क)', isHard:false, text:'उदाहरणम् अनुसृत्य एकपदेन उत्तरं लिखत — सिंहस्य नाम किम्?', answer:{ answerKey:'खरनखरः।', schoolMethod:'खरनखरः।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'गुहायाः स्वामी कः आसीत्?', answer:{ answerKey:'दधिपुच्छः (अथवा शृगालः)।', schoolMethod:'दधिपुच्छः (अथवा शृगालः)।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'सिंहः कदा गुहायाः समीपे आगतः?', answer:{ answerKey:'सूर्यास्तसमये।', schoolMethod:'सूर्यास्तसमये।' } },
          { id:'q1d', number:'१ (घ)', isHard:false, text:'हस्तपादादिकाः क्रियाः केषां न प्रवर्तन्ते?', answer:{ answerKey:'भयसन्त्रस्तमनसाम्।', schoolMethod:'भयसन्त्रस्तमनसाम्।' } },
          { id:'q1e', number:'१ (ङ)', isHard:false, text:'गुहा केन प्रतिध्वनिता?', answer:{ answerKey:'उच्चगर्जनेन (अथवा सिंहेन)।', schoolMethod:'उच्चगर्जनेन (अथवा सिंहेन)।' } },
          { id:'q2a', number:'२ (क)', isHard:false, text:'उदाहरणम् अनुसृत्य पिटकातः अव्ययपदानि चित्वा वाक्यानि पूरयत —\nपिटका — सदा, बहिः, दूरम्, तावत्, तर्हि, तदा\nयदा सूर्यः उदेति, ______ सर्वत्र प्रकाशः भवति।', answer:{ answerKey:'यदा सूर्यः उदेति, <u>तदा</u> सर्वत्र प्रकाशः भवति।', schoolMethod:'यदा सूर्यः उदेति, <u>तदा</u> सर्वत्र प्रकाशः भवति।' } },
          { id:'q2b', number:'२ (ख)', isHard:false, text:'सूर्यः ______ पूर्वदिशि एव उदेति।', answer:{ answerKey:'सूर्यः <u>सदा</u> पूर्वदिशि एव उदेति।', schoolMethod:'सूर्यः <u>सदा</u> पूर्वदिशि एव उदेति।' } },
          { id:'q2c', number:'२ (ग)', isHard:false, text:'शृगालः गुहायाः ______ आसीत्।', answer:{ answerKey:'शृगालः गुहायाः <u>बहिः</u> आसीत्।', schoolMethod:'शृगालः गुहायाः <u>बहिः</u> आसीत्।' } },
          { id:'q2d', number:'२ (घ)', isHard:false, text:'सः यावत् पश्यति, ______ सिंहपदपद्धतिः दृश्यते।', answer:{ answerKey:'सः यावत् पश्यति, <u>तावत्</u> सिंहपदपद्धतिः दृश्यते।', schoolMethod:'सः यावत् पश्यति, <u>तावत्</u> सिंहपदपद्धतिः दृश्यते।' } },
          { id:'q2e', number:'२ (ङ)', isHard:false, text:'शृगालः ततः ______ पलायमानः अभवत्।', answer:{ answerKey:'शृगालः ततः <u>दूरम्</u> पलायमानः अभवत्।', schoolMethod:'शृगालः ततः <u>दूरम्</u> पलायमानः अभवत्।' } },
          { id:'q2f', number:'२ (च)', isHard:false, text:'यदि सफलताम् इच्छसि, ______ आलस्यं त्यज।', answer:{ answerKey:'यदि सफलताम् इच्छसि, <u>तर्हि</u> आलस्यं त्यज।', schoolMethod:'यदि सफलताम् इच्छसि, <u>तर्हि</u> आलस्यं त्यज।' } },
          { id:'q3a', number:'३ (क)', isHard:false, text:'रेखाङ्कितपदानि आधृत्य यथोदाहरणं प्रश्नवाक्यनिर्माणं कुरुत — खरनखरः वने प्रतिवसति स्म।', answer:{ answerKey:'खरनखरः <u>कुत्र</u> प्रतिवसति स्म?', schoolMethod:'खरनखरः <u>कुत्र</u> प्रतिवसति स्म?' } },
          { id:'q3b', number:'३ (ख)', isHard:false, text:'महतीं गुहां दृष्ट्वा सिंहः अचिन्तयत्।', answer:{ answerKey:'महतीं गुहां दृष्ट्वा <u>कः</u> अचिन्तयत्?', schoolMethod:'महतीं गुहां दृष्ट्वा <u>कः</u> अचिन्तयत्?' } },
          { id:'q3c', number:'३ (ग)', isHard:false, text:'शृगालः भयेन अचिन्तयत्।', answer:{ answerKey:'शृगालः <u>कथम्</u> (अथवा <u>केन</u>) अचिन्तयत्?', schoolMethod:'शृगालः <u>कथम्</u> (अथवा <u>केन</u>) अचिन्तयत्?' } },
          { id:'q3d', number:'३ (घ)', isHard:false, text:'शृगालः दूरम् पलायितः।', answer:{ answerKey:'शृगालः <u>कुत्र</u> पलायितः?', schoolMethod:'शृगालः <u>कुत्र</u> पलायितः?' } },
          { id:'q3e', number:'३ (ङ)', isHard:false, text:'विचार्य सिंहः शृगालस्य आह्वानम् अकरोत्।', answer:{ answerKey:'विचार्य सिंहः <u>कस्य</u> आह्वानम् अकरोत्?', schoolMethod:'विचार्य सिंहः <u>कस्य</u> आह्वानम् अकरोत्?' } },
        ]
      },
      {
        id: 's2', title: 'क्रियाकलापः',
        questions: [
          { id:'q1a', number:'१ (क)', isHard:false, text:'वयं चर्चयामः (मौखिकम्) — संकटसमये धैर्यस्य महत्त्वम्', answer:{ answerKey:'कथायां शृगालः संकटसमये भयभीतः न अभवत्, अपितु धैर्येण विचारं कृत्वा स्वात्मानं अरक्षत्। संकटकाले धैर्यमेव मनुष्यस्य परमं मित्रं भवति।', schoolMethod:'कथायां शृगालः संकटसमये भयभीतः न अभवत्, अपितु धैर्येण विचारं कृत्वा स्वात्मानं अरक्षत्। संकटकाले धैर्यमेव मनुष्यस्य परमं मित्रं भवति।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'वयं चर्चयामः (मौखिकम्) — "बुद्धिः बलात् श्रेष्ठा भवति"', answer:{ answerKey:'सिंहः बलवान् आसीत् परन्तु शृगालः बुद्धिमत्तायाः प्रयोगं कृत्वा तं वञ्चयित्वा स्वप्राणान् अरक्षत्। एतेन सिद्धम् यत् बुद्धिशक्तिः शारीरिकबलात् सदैव श्रेष्ठा भवति।', schoolMethod:'सिंहः बलवान् आसीत् परन्तु शृगालः बुद्धिमत्तायाः प्रयोगं कृत्वा तं वञ्चयित्वा स्वप्राणान् अरक्षत्। एतेन सिद्धम् यत् बुद्धिशक्तिः शारीरिकबलात् सदैव श्रेष्ठा भवति।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'वयं चर्चयामः (मौखिकम्) — प्रत्युत्पन्नमतित्वेन संकटमुक्तिः', answer:{ answerKey:'यदा वयं सहसा आगते संकटे शीघ्रं बुद्ध्या उपायं चिन्तयामः, तदा जटिलसमस्यातः अपि सुलभतया मुक्ताः भवामः।', schoolMethod:'यदा वयं सहसा आगते संकटे शीघ्रं बुद्ध्या उपायं चिन्तयामः, तदा जटिलसमस्यातः अपि सुलभतया मुक्ताः भवामः।' } },
          { id:'q2a', number:'२ (क)', isHard:false, text:'अनुच्छेदः — "यदि भवतः समक्षं भयस्य किमपि कारणं भवेत् तर्हि किं करिष्यति?"', answer:{ answerKey:'यदि मम समक्षं कदापि भयस्य किमपि कारणं भवेत्, तर्हि अहं भयभीता न भविष्यामि। अहं धैर्येण शान्तचित्तेन च तस्याः स्थितेः सामनां करिष्यामि। अहं स्वस्य प्रत्युत्पन्नमतित्वात् (चतुरतायाः) उपयोगं कृत्वा संकटस्य उपायं चिन्तयिष्यामि। आवश्यकतायाम् अहं ज्येष्ठानां शिक्षकाणां च सहायतां ग्रहीष्यामि।', schoolMethod:'यदि मम समक्षं कदापि भयस्य किमपि कारणं भवेत्, तर्हि अहं भयभीता न भविष्यामि। अहं धैर्येण शान्तचित्तेन च तस्याः स्थितेः सामनां करिष्यामि। अहं स्वस्य प्रत्युत्पन्नमतित्वात् (चतुरतायाः) उपयोगं कृत्वा संकटस्य उपायं चिन्तयिष्यामि। आवश्यकतायाम् अहं ज्येष्ठानां शिक्षकाणां च सहायतां ग्रहीष्यामि।' } },
          { id:'q2b', number:'२ (ख)', isHard:false, text:'सिंहस्य विषये पञ्च संस्कृतवाक्यानि लिखत', answer:{ answerKey:'क. सिंहः वनानाम् राजा (वनराजः) भवति।\nख. सः अतीव पराक्रमी बलवान् च पशुः अस्ति।\nग. सिंहः मांसाहारी जीवः अस्ति तथा गुहायां निवसति।\nघ. तस्य उच्चगर्जनं श्रुत्वा वने सर्वे पशवः भयभीताः भवन्ति।\nङ. सिंहः भारतस्य राष्ट्रियचिन्हे अपि शोभते।', schoolMethod:'क. सिंहः वनानाम् राजा (वनराजः) भवति।\nख. सः अतीव पराक्रमी बलवान् च पशुः अस्ति।\nग. सिंहः मांसाहारी जीवः अस्ति तथा गुहायां निवसति।\nघ. तस्य उच्चगर्जनं श्रुत्वा वने सर्वे पशवः भयभीताः भवन्ति।\nङ. सिंहः भारतस्य राष्ट्रियचिन्हे अपि शोभते।' } },
        ]
      }
    ]
  },
  {
    id:'ch09', number:9, title:'ऋतुः वसन्तः', slug:'rituh-vasantah', code:'0904ir09', exercises:[
      {
        id: 's1', title: 'वयम् अभ्यासं कुर्मः',
        questions: [
          { id:'q1a', number:'१ (क)', isHard:false, text:'अधोलिखितानां प्रश्नानाम् उत्तराणि एकपदेन लिखत — वसन्तस्य पर्यायवाचकः शब्दः कः?', answer:{ answerKey:'ऋतुराजः (अथवा मधूत्सवः)।', schoolMethod:'ऋतुराजः (अथवा मधूत्सवः)।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'वसन्ते आकाशः कीदृशो भवति?', answer:{ answerKey:'निर्मलः (अथवा स्वच्छः)।', schoolMethod:'निर्मलः (अथवा स्वच्छः)।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'वसन्ते कः मधुरं कूजति?', answer:{ answerKey:'पिकः (अथवा कोकिलः)।', schoolMethod:'पिकः (अथवा कोकिलः)।' } },
          { id:'q1d', number:'१ (घ)', isHard:false, text:'पिकस्य ध्वनिं के अनुकुर्वन्ति?', answer:{ answerKey:'बालकाः (अथवा जनाः)।', schoolMethod:'बालकाः (अथवा जनाः)।' } },
          { id:'q1e', number:'१ (ङ)', isHard:false, text:'कम्पमाना लता कीदृशी प्रतीयते?', answer:{ answerKey:'नर्तकीव (नर्तकी इव)।', schoolMethod:'नर्तकीव (नर्तकी इव)।' } },
          { id:'q2a', number:'२ (क)', isHard:false, text:'पिटकातः उचितम् अव्ययपदं चित्वा रिक्तस्थानानि पूरयत —\nपिटका — सर्वत्र, तदा, इदानीम्, क्वचित्, एव, अद्यत्वे\n______ जडता विलीयते, मलीनता अपगता भवति।', answer:{ answerKey:'<u>इदानीं</u> जडता विलीयते, मलीनता अपगता भवति।', schoolMethod:'<u>इदानीं</u> जडता विलीयते, मलीनता अपगता भवति।' } },
          { id:'q2b', number:'२ (ख)', isHard:false, text:'______ तडागेषु नदीषु कुल्यासु सरःसु च राजते विमलं वारि।', answer:{ answerKey:'<u>सर्वत्र</u> तडागेषु नदीषु कुल्यासु सरःसु च राजते विमलं वारि।', schoolMethod:'<u>सर्वत्र</u> तडागेषु नदीषु कुल्यासु सरःसु च राजते विमलं वारि।' } },
          { id:'q2c', number:'२ (ग)', isHard:false, text:'______ मधुनः आधिक्यम्; पुष्पेषु मधूनि भवन्ति।', answer:{ answerKey:'<u>अद्यत्वे</u> मधुनः आधिक्यम्; पुष्पेषु मधूनि भवन्ति।', schoolMethod:'<u>अद्यत्वे</u> मधुनः आधिक्यम्; पुष्पेषु मधूनि भवन्ति।' } },
          { id:'q2d', number:'२ (घ)', isHard:false, text:'______ मुकुलितानि अपरत्र प्रफुल्लितानि कमलवनानि।', answer:{ answerKey:'<u>क्वचित्</u> मुकुलितानि अपरत्र प्रफुल्लितानि कमलवनानि।', schoolMethod:'<u>क्वचित्</u> मुकुलितानि अपरत्र प्रफुल्लितानि कमलवनानि।' } },
          { id:'q2e', number:'२ (ङ)', isHard:false, text:'यदा प्रमादं कुर्वन्ति ______ तेषां पक्षाः संसक्ताः भवन्ति।', answer:{ answerKey:'यदा प्रमादं कुर्वन्ति <u>तदा</u> तेषां पक्षाः संसक्ताः भवन्ति।', schoolMethod:'यदा प्रमादं कुर्वन्ति <u>तदा</u> तेषां पक्षाः संसक्ताः भवन्ति।' } },
          { id:'q3a', number:'३ (क)', isHard:false, text:'अधोलिखितेषु वाक्येषु सत्यम्/असत्यं चिह्नितं कुरुत — वसन्तः ऋतुराजः इति कथ्यते। (सत्यम् / असत्यम्)', answer:{ answerKey:'**सत्यम्** ✓', schoolMethod:'**सत्यम्** ✓' } },
          { id:'q3b', number:'३ (ख)', isHard:false, text:'वसन्तसमये आकाशः मलिनः दृश्यते। (सत्यम् / असत्यम्)', answer:{ answerKey:'**असत्यम्**', schoolMethod:'**असत्यम्**' } },
          { id:'q3c', number:'३ (ग)', isHard:false, text:'वनेषु वाटिकासु च नानावर्णानि पुष्पाणि शोभन्ते। (सत्यम् / असत्यम्)', answer:{ answerKey:'**सत्यम्** ✓', schoolMethod:'**सत्यम्** ✓' } },
          { id:'q3d', number:'३ (घ)', isHard:false, text:'केवलं मानवाः एव वसन्ते प्रमुदिताः भवन्ति। (सत्यम् / असत्यम्)', answer:{ answerKey:'**असत्यम्**', schoolMethod:'**असत्यम्**' } },
          { id:'q3e', number:'३ (ङ)', isHard:false, text:'विकसितानां पङ्कजानां शोभा कस्यापि मनः न हरति। (सत्यम् / असत्यम्)', answer:{ answerKey:'**असत्यम्**', schoolMethod:'**असत्यम्**' } },
          { id:'q4a', number:'४ (क)', isHard:false, text:'अधोलिखितेषु शब्देषु सन्धिं सन्धिविच्छेदं च कुरुत — सु + आगतम् = ______', answer:{ answerKey:'स्वागतम्।', schoolMethod:'सु + आगतम् = स्वागतम्।' } },
          { id:'q4b', number:'४ (ख)', isHard:false, text:'तव + आगमने = ______', answer:{ answerKey:'तवागमने।', schoolMethod:'तव + आगमने = तवागमने।' } },
          { id:'q4c', number:'४ (ग)', isHard:false, text:'नर्तकी + इव = ______', answer:{ answerKey:'नर्तकीव।', schoolMethod:'नर्तकी + इव = नर्तकीव।' } },
          { id:'q4d', number:'४ (घ)', isHard:false, text:'पुष्पाणामुपरि = ______ + ______', answer:{ answerKey:'पुष्पाणाम् + उपरि।', schoolMethod:'पुष्पाणामुपरि = पुष्पाणाम् + उपरि।' } },
          { id:'q4e', number:'४ (ङ)', isHard:false, text:'स्वानुरागम् = ______ + ______', answer:{ answerKey:'स्व + अनुरागम्।', schoolMethod:'स्वानुरागम् = स्व + अनुरागम्।' } },
        ]
      },
      {
        id: 's2', title: 'क्रियाकलापः',
        questions: [
          { id:'q1', number:'१', isHard:false, text:'लिखितः क्रियाकलापः — "मम प्रियः ऋतुः (वसन्तः)" विषये पञ्च संस्कृतवाक्यानि लिखत', answer:{ answerKey:'१. षड् ऋतुषु मम प्रियः ऋतुः वसन्तः अस्ति। (Spring is my favorite among the six seasons.)\n२. वसन्तऋतौ सर्वत्र सुन्दराणि पुष्पाणि विकसन्ति। (Beautiful flowers bloom everywhere in the spring season.)\n३. एतस्मिन् ऋतौ मन्दः शीतलः मन्द-पवनः वहति। (In this season, a gentle, cool breeze blows.)\n४. वसन्ते कोकिला मधुरं कूजति सर्वान् च आनन्दयति। (In spring, the cuckoo sings sweetly and delights everyone.)\n५. वसन्तः "ऋतुराजः" इति नाम्ना अपि ज्ञायते। (Spring is also known by the name "Rituraj" or the King of Seasons.)', schoolMethod:'१. षड् ऋतुषु मम प्रियः ऋतुः वसन्तः अस्ति। (Spring is my favorite among the six seasons.)\n२. वसन्तऋतौ सर्वत्र सुन्दराणि पुष्पाणि विकसन्ति। (Beautiful flowers bloom everywhere in the spring season.)\n३. एतस्मिन् ऋतौ मन्दः शीतलः मन्द-पवनः वहति। (In this season, a gentle, cool breeze blows.)\n४. वसन्ते कोकिला मधुरं कूजति सर्वान् च आनन्दयति। (In spring, the cuckoo sings sweetly and delights everyone.)\n५. वसन्तः "ऋतुराजः" इति नाम्ना अपि ज्ञायते। (Spring is also known by the name "Rituraj" or the King of Seasons.)' } },
          { id:'q2', number:'२', isHard:false, text:'मौखिकः क्रियाकलापः — वसन्त-ऋतुः "ऋतुराजः" इति किमर्थम् उच्यते?', answer:{ answerKey:'वसन्तऋतौ प्रकृतिः अतीव सुन्दरा मनोहरा च भवति। न अतीव शीतं न च अतीव उष्णं भवति। सर्वत्र वृक्षाः नवपल्लवैः पुष्पैः च शोभन्ते। कोकिलायाः मधुरः स्वरः कुहूकूजितं च वातावरणं रमणीयं करोति। प्रकृतेः एतादृशं सौन्दर्यं दृष्ट्वा वसन्तः सर्वेषां ऋतूनाम् राजा अर्थात् "ऋतुराजः" कथ्यते।', schoolMethod:'वसन्तऋतौ प्रकृतिः अतीव सुन्दरा मनोहरा च भवति। न अतीव शीतं न च अतीव उष्णं भवति। सर्वत्र वृक्षाः नवपल्लवैः पुष्पैः च शोभन्ते। कोकिलायाः मधुरः स्वरः कुहूकूजितं च वातावरणं रमणीयं करोति। प्रकृतेः एतादृशं सौन्दर्यं दृष्ट्वा वसन्तः सर्वेषां ऋतूनाम् राजा अर्थात् "ऋतुराजः" कथ्यते।' } },
          { id:'q3', number:'३', isHard:false, text:'मौखिकः क्रियाकलापः — यदि वसन्तः ऋतुः न आगच्छेत् तर्हि प्रकृतिः, पर्यावरणं, मानवजीवनं च कथं भवेत्? (कक्षायां वक्तुं वाक्यानि)', answer:{ answerKey:'प्रकृतिः — यदि वसन्तः न आगच्छेत्, तर्हि प्रकृतौ नूतनता नवीन-पल्लवाः च न दृश्येरन्।\nपर्यावरणम् — वृक्षाः पुष्परहिताः भवेयुः, वातावरणं च उल्लासहीनं भवेत्।\nमानवजीवनम् — शीत-उष्णयोः निरन्तरप्रभावेन जनानां मनसि उत्साहः आनन्दः च न्यूनः भवेत्।', schoolMethod:'प्रकृतिः — यदि वसन्तः न आगच्छेत्, तर्हि प्रकृतौ नूतनता नवीन-पल्लवाः च न दृश्येरन्।\nपर्यावरणम् — वृक्षाः पुष्परहिताः भवेयुः, वातावरणं च उल्लासहीनं भवेत्।\nमानवजीवनम् — शीत-उष्णयोः निरन्तरप्रभावेन जनानां मनसि उत्साहः आनन्दः च न्यूनः भवेत्।' } },
        ]
      }
    ]
  },
  {
    id:'ch10', number:10, title:'सहजः स्वास्थ्यलाभः', slug:'sahajah-svasthyalabhah', code:'0904ir10', exercises:[
      {
        id: 's1', title: 'वयम् अभ्यासं कुर्मः',
        questions: [
          { id:'q1a', number:'१ (क)', isHard:false, text:'एकपदेन उत्तरत — कस्य फलं त्रिदोषजित् अस्ति?', answer:{ answerKey:'आमलकस्य (धात्रीफलस्य)।', schoolMethod:'आमलकस्य (धात्रीफलस्य)।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'कफवातशामिनी सती श्वास-कासादिषु का हितकरा भवति?', answer:{ answerKey:'तुलसी।', schoolMethod:'तुलसी।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'हारिद्रा कस्मात् कारणात् वर्ण्या सिद्धा?', answer:{ answerKey:'कान्तिवर्धनात् (वर्णशोधनात्)।', schoolMethod:'कान्तिवर्धनात् (वर्णशोधनात्)।' } },
          { id:'q1d', number:'१ (घ)', isHard:false, text:'निम्बफलस्य रसः कीदृशः भवति?', answer:{ answerKey:'तिक्तः।', schoolMethod:'तिक्तः।' } },
          { id:'q2a', number:'२ (क)', isHard:false, text:'पूर्णवाक्येन उत्तरत — धात्रीफलं रसायनत्वात् किमर्थं शस्यते?', answer:{ answerKey:'धात्रीफलं रसायनत्वात् आयुर्वर्धनार्थम् शरीरस्य बलवर्धनाय च प्रशस्यते।', schoolMethod:'धात्रीफलं रसायनत्वात् आयुर्वर्धनार्थम् शरीरस्य बलवर्धनाय च प्रशस्यते।' } },
          { id:'q2b', number:'२ (ख)', isHard:false, text:'आर्द्रकस्य गुणाः कया सह समानाः निरूपिताः सन्ति?', answer:{ answerKey:'आर्द्रकस्य गुणाः शुण्ठ्या सह समाना निरूपिताः सन्ति।', schoolMethod:'आर्द्रकस्य गुणाः शुण्ठ्या सह समाना निरूपिताः सन्ति।' } },
          { id:'q2c', number:'२ (ग)', isHard:false, text:'हारिद्रा केषां रोगाणां नाशं करोति?', answer:{ answerKey:'हरिद्रा कुष्ठ-प्रमेह-कण्डू-व्रणादीनां रोगाणां नाशं करोति।', schoolMethod:'हरिद्रा कुष्ठ-प्रमेह-कण्डू-व्रणादीनां रोगाणां नाशं करोति।' } },
          { id:'q3a', number:'३ (क)', isHard:false, text:'कोष्ठकात् उचितं पदं चित्वा रिक्तस्थानानि पूरयत — तुलसी ______ स्वभावत्वात् दाहं जनियतुम् अपि शक्नोति। (शीत / उष्ण)', answer:{ answerKey:'तुलसी <u>उष्ण</u> स्वभावत्वात् दाहं जनयितुम् अपि शक्नोति।', schoolMethod:'तुलसी <u>उष्ण</u> स्वभावत्वात् दाहं जनयितुम् अपि शक्नोति।' } },
          { id:'q3b', number:'३ (ख)', isHard:false, text:'निम्बफलम् ______ दोषशोधनपूर्वकं रोगशमनकारि भवति। (आयुर्वेदे / भोजने)', answer:{ answerKey:'निम्बफलम् <u>आयुर्वेदे</u> दोषशोधनपूर्वकं रोगप्रशमनकारि भवति।', schoolMethod:'निम्बफलम् <u>आयुर्वेदे</u> दोषशोधनपूर्वकं रोगप्रशमनकारि भवति।' } },
          { id:'q3c', number:'३ (ग)', isHard:false, text:'आर्द्रकं ______ विपाकयुक्तं भवति। (कटु / मधुर)', answer:{ answerKey:'आर्द्रकं <u>कटु</u> विपाकयुक्तं भवति।', schoolMethod:'आर्द्रकं <u>कटु</u> विपाकयुक्तं भवति।' } },
          { id:'q4', number:'४', isHard:false, text:'उचितं मेलनं कुरुत —\n(१) निम्बः (२) तुलसी (३) आर्द्रकम् (४) आमलकम् (५) हारिद्रा\nक. रसतः तिक्तं त्रिदोषजित् च अस्ति। ख. अग्निमान्द्ये अरुचौ च हितकरं भवति। ग. कटु-तिक्तरससम्पन्ना हृद्या च भवति। घ. स्वभावतः तिक्तरसप्रधानं कुष्ठघ्नं च भवति। ङ. व्रणशोधन-रोपणकर्मणि सर्वथा शस्ता अस्ति।', answer:{ answerKey:'(१) निम्बः — घ. स्वभावतः तिक्तरसप्रधानं कुष्ठघ्नं च भवति।\n(२) तुलसी — ग. कटु-तिक्तरससम्पन्ना हृद्या च भवति।\n(३) आर्द्रकम् — ख. अग्निमान्द्ये अरुचौ च हितकरं भवति।\n(४) आमलकम् — क. रसतः तिक्तं त्रिदोषजित् च अस्ति।\n(५) हरिद्रा — ङ. व्रणशोधन-रोपणकर्मणि सर्वथा प्रशस्ता अस्ति।', schoolMethod:'(१) निम्बः — घ. स्वभावतः तिक्तरसप्रधानं कुष्ठघ्नं च भवति।\n(२) तुलसी — ग. कटु-तिक्तरससम्पन्ना हृद्या च भवति।\n(३) आर्द्रकम् — ख. अग्निमान्द्ये अरुचौ च हितकरं भवति।\n(४) आमलकम् — क. रसतः तिक्तं त्रिदोषजित् च अस्ति।\n(५) हरिद्रा — ङ. व्रणशोधन-रोपणकर्मणि सर्वथा प्रशस्ता अस्ति।' } },
        ]
      },
      {
        id: 's2', title: 'क्रियाकलापः',
        questions: [
          { id:'q1', number:'१', isHard:false, text:'अभिनय-कला-माध्यमेन वानस्पति-परिचयः — छात्राः कक्षायां पञ्चसमूहेषु विभक्ताः भवेयुः। प्रत्येकं समूहः एकस्याः वनस्पतेः (तुलसी, आमलकं, निम्बः, हरिद्रा, आर्द्रकम्) रूपं धृत्वा आत्मपरिचयं संस्कृतेन प्रस्तौतु।', answer:{ answerKey:'निदर्शनम् —\nहरिद्रा: "अहं हरिद्रा अस्मि। मम रसः कटु-तिक्तः अस्ति। अहं त्वग्दोषं व्रणं च नाशयामि। मम वर्णः पीतः अस्ति।"\nतुलसी: "अहं तुलसी अस्मि। अहं कफ-वातौ शमयामि। श्वासे कासे च अहं हितकरा अस्मि।"\nनिम्बः: "अहं निम्बः अस्मि। मम फलरसः तिक्तः अस्ति। अहं रक्तदोषं कुष्ठं च हन्ति।"\nआमलकम्: "अहं आमलकम् अस्मि। अहं त्रिदोषजित् अस्मि। अहं रसायनः आयुर्वर्धकः च अस्मि।"\nआर्द्रकम्: "अहं आर्द्रकम् अस्मि। मम रसः कटुकः अस्ति। अहं अग्निमान्द्यं अरुचिं च नाशयामि।"', schoolMethod:'निदर्शनम् —\nहरिद्रा: "अहं हरिद्रा अस्मि। मम रसः कटु-तिक्तः अस्ति। अहं त्वग्दोषं व्रणं च नाशयामि। मम वर्णः पीतः अस्ति।"\nतुलसी: "अहं तुलसी अस्मि। अहं कफ-वातौ शमयामि। श्वासे कासे च अहं हितकरा अस्मि।"\nनिम्बः: "अहं निम्बः अस्मि। मम फलरसः तिक्तः अस्ति। अहं रक्तदोषं कुष्ठं च हन्ति।"\nआमलकम्: "अहं आमलकम् अस्मि। अहं त्रिदोषजित् अस्मि। अहं रसायनः आयुर्वर्धकः च अस्मि।"\nआर्द्रकम्: "अहं आर्द्रकम् अस्मि। मम रसः कटुकः अस्ति। अहं अग्निमान्द्यं अरुचिं च नाशयामि।"' } },
          { id:'q2', number:'२', isHard:false, text:'औषध-पर्ण-चित्रणम् — छात्राः स्वगृहात् उद्यानात् वा एतासां वनस्पतीनां (तुलसी, निम्बः, आमलकम् इत्यादि) पादपानां पर्णानि एकत्रितानि कृत्वा तेषाम् उपयोगेन एकां \'सञ्चिकां\' रचयन्तु।', answer:{ answerKey:'प्रक्रिया — विविधानाम् औषधीय-पादपानां (तुलसी, निम्बः, आमलकम्, हरिद्रा, आर्द्रकम्) पर्णानि एकत्रीत्य शुष्कानि कारयित्वा कार्डबोर्ड्-उपरि सुन्दरं रूपेण आलेपयन्तु। प्रत्येकस्य पर्णस्य अधः वनस्पतेः नाम तस्य उपयोगश्च संस्कृतेन लिखन्तु — यथा "तुलसी — कफ-वात-शामिनी", "आमलकम् — त्रिदोषजित्, रसायनम्"।', schoolMethod:'प्रक्रिया — विविधानाम् औषधीय-पादपानां (तुलसी, निम्बः, आमलकम्, हरिद्रा, आर्द्रकम्) पर्णानि एकत्रीत्य शुष्कानि कारयित्वा कार्डबोर्ड्-उपरि सुन्दरं रूपेण आलेपयन्तु। प्रत्येकस्य पर्णस्य अधः वनस्पतेः नाम तस्य उपयोगश्च संस्कृतेन लिखन्तु — यथा "तुलसी — कफ-वात-शामिनी", "आमलकम् — त्रिदोषजित्, रसायनम्"।' } },
          { id:'q3', number:'३', isHard:false, text:'विषयः — \'मम गृहे स्वास्थ्य-रक्षक-वनस्पतयः\' — छात्राः स्वगृहे पाकशालायाम् उद्याने वा उपलब्धानां वनस्पतीनां सूचीं निर्मान्तु। जननी-जनकयोः साहाय्येन तासाम् आयुर्वेदीयं महत्त्वं ज्ञात्वा संस्कृते पञ्च वाक्यानि सचित्रं लिखन्तु।', answer:{ answerKey:'निदर्शन-वाक्यानि —\n१. मम गृहे तुलसी-पादपः अस्ति। सा श्वास-कास-रोगेषु हितकरा भवति।\n२. आमलकफलं त्रिदोषजित् अस्ति; तत् रसायनत्वात् आयुषं वर्धयति।\n३. निम्बः रक्तदोषं कुष्ठं च हन्ति।\n४. हरिद्रा व्रण-कण्डू-आदीनां रोगाणां शमनी अस्ति।\n५. आर्द्रकं अग्निमान्द्ये अरुचौ च हितकरं भवति।', schoolMethod:'निदर्शन-वाक्यानि —\n१. मम गृहे तुलसी-पादपः अस्ति। सा श्वास-कास-रोगेषु हितकरा भवति।\n२. आमलकफलं त्रिदोषजित् अस्ति; तत् रसायनत्वात् आयुषं वर्धयति।\n३. निम्बः रक्तदोषं कुष्ठं च हन्ति।\n४. हरिद्रा व्रण-कण्डू-आदीनां रोगाणां शमनी अस्ति।\n५. आर्द्रकं अग्निमान्द्ये अरुचौ च हितकरं भवति।' } },
          { id:'q4', number:'४', isHard:false, text:'विषयः — \'त्रिदोष-शमन-सारणी\' — पाठाधारेण वात-पित्त-कफदोषान् शमयितुं के पादपाः योग्याः इति प्रदर्शयन्तीम् एकां \'भित्तिपत्रिकां\' रचयन्तु।', answer:{ answerKey:'भित्तिपत्रिका-विषयसूची —\nवातशमनाय — आमलकम् (अम्लत्वात् वातं हन्ति), आर्द्रकम्।\nपित्तशमनाय — आमलकम् (माधुर्यात् पित्तं हन्ति), निम्बः।\nकफशमनाय — तुलसी (कफ-वात-शामिनी), हरिद्रा (कण्डू-कुष्ठघ्नी)।\nचित्रैः सह प्रत्येकस्य पादपस्य गुणाः संस्कृतेन स्पष्टीकृत्य भित्तिपत्रिका रचनीया।', schoolMethod:'भित्तिपत्रिका-विषयसूची —\nवातशमनाय — आमलकम् (अम्लत्वात् वातं हन्ति), आर्द्रकम्।\nपित्तशमनाय — आमलकम् (माधुर्यात् पित्तं हन्ति), निम्बः।\nकफशमनाय — तुलसी (कफ-वात-शामिनी), हरिद्रा (कण्डू-कुष्ठघ्नी)।\nचित्रैः सह प्रत्येकस्य पादपस्य गुणाः संस्कृतेन स्पष्टीकृत्य भित्तिपत्रिका रचनीया।' } },
        ]
      }
    ]
  },
  {
    id:'ch11', number:11, title:'आर्यभटः', slug:'aryabhatah', code:'0904ir11', exercises:[
      {
        id: 's1', title: 'वयम् अभ्यासं कुर्मः',
        questions: [
{ id:'q1a', number:'१ (क)', isHard:false, text:'पूर्णवाक्येन उत्तरत — कः सुस्थापितः सिद्धान्तः?', answer:{ answerKey:'"सूर्यः अचलः, पृथिवी च चला या स्वकीये अक्षे घूर्णति" इति सुस्थापितः सिद्धान्तः।', schoolMethod:'"सूर्यः अचलः, पृथिवी च चला या स्वकीये अक्षे घूर्णति" इति सुस्थापितः सिद्धान्तः।' } },
          { id:'q1b', number:'१ (ख)', isHard:false, text:'चन्द्रग्रहणं कथं भवति?', answer:{ answerKey:'यदा पृथिव्याः छायापातेन चन्द्रस्य प्रकाशः अवरुध्यते, तदा चन्द्रग्रहणं भवति।', schoolMethod:'यदा पृथिव्याः छायापातेन चन्द्रस्य प्रकाशः अवरुध्यते, तदा चन्द्रग्रहणं भवति।' } },
          { id:'q1c', number:'१ (ग)', isHard:false, text:'सूर्यग्रहणं कथं दृश्यते?', answer:{ answerKey:'पृथिवीसूर्ययोः मध्ये चन्द्रस्य आगमनेन तस्य छायापातेन सूर्यग्रहणं दृश्यते।', schoolMethod:'पृथिवीसूर्ययोः मध्ये चन्द्रस्य आगमनेन तस्य छायापातेन सूर्यग्रहणं दृश्यते।' } },
          { id:'q1d', number:'१ (घ)', isHard:false, text:'आर्यभटस्य विरोधः किमर्थम् अभवत्?', answer:{ answerKey:'समाजे नूतनानां विचाराणां स्वीकरणे प्रायः सामान्याः जनाः काठिन्यम् अनुभवन्ति, अतः आर्यभटस्य विरोधः अभवत्।', schoolMethod:'समाजे नूतनानां विचाराणां स्वीकरणे प्रायः सामान्याः जनाः काठिन्यम् अनुभवन्ति, अतः आर्यभटस्य विरोधः अभवत्।' } },
          { id:'q1e', number:'१ (ङ)', isHard:false, text:'प्रथमोपग्रहस्य नाम आर्यभटः इति कथं कृतम्?', answer:{ answerKey:"आर्यभटस्य वैज्ञानिके योगदाने आदरं प्रकटयितुं भारतस्य प्रथमोपग्रहस्य नाम 'आर्यभटः' इति कृतम्।", schoolMethod:"आर्यभटस्य वैज्ञानिके योगदाने आदरं प्रकटयितुं भारतस्य प्रथमोपग्रहस्य नाम 'आर्यभटः' इति कृतम्।" } },
          { id:'q2a', number:'२ (क)', isHard:false, text:'मञ्जूषातः पदानि चित्वा रिक्तस्थानानि पूरयत —\nमञ्जूषा — तदा, पृथ्वी, नौकाम्, चला, अस्तम्\nसूर्यः पूर्वदिशायाम् उदेति, पश्चिमदिशायां च ______ गच्छति।', answer:{ answerKey:'सूर्यः पूर्वदिशायाम् उदेति, पश्चिमदिशायां च <u>अस्तं</u> गच्छति।', schoolMethod:'सूर्यः पूर्वदिशायाम् उदेति, पश्चिमदिशायां च <u>अस्तं</u> गच्छति।' } },
          { id:'q2b', number:'२ (ख)', isHard:false, text:'सूर्यः अचलः, पृथिवी तु ______।', answer:{ answerKey:'सूर्यः अचलः, पृथिवी तु <u>चला</u>।', schoolMethod:'सूर्यः अचलः, पृथिवी तु <u>चला</u>।' } },
          { id:'q2c', number:'२ (ग)', isHard:false, text:'______ स्वकीये अक्षे घूर्णति।', answer:{ answerKey:'<u>पृथिवी</u> स्वकीये अक्षे घूर्णति।', schoolMethod:'<u>पृथिवी</u> स्वकीये अक्षे घूर्णति।' } },
          { id:'q2d', number:'२ (घ)', isHard:false, text:'यदा पृथ्व्याः छायापातेन चन्द्रस्य प्रकाशः अवरुध्यते, ______ चन्द्रग्रहणं भवति।', answer:{ answerKey:'यदा पृथ्व्याः छायापातेन चन्द्रस्य प्रकाशः अवरुध्यते, <u>तदा</u> चन्द्रग्रहणं भवति।', schoolMethod:'यदा पृथ्व्याः छायापातेन चन्द्रस्य प्रकाशः अवरुध्यते, <u>तदा</u> चन्द्रग्रहणं भवति।' } },
          { id:'q2e', number:'२ (ङ)', isHard:false, text:'नौकायाम् उपविष्टः मानवः ______ स्थिराम् अनुभवति।', answer:{ answerKey:'नौकायाम् उपविष्टः मानवः <u>नौकाम्</u> स्थिराम् अनुभवति।', schoolMethod:'नौकायाम् उपविष्टः मानवः <u>नौकाम्</u> स्थिराम् अनुभवति।' } },
          { id:'q3a', number:'३ (क)', isHard:false, text:'सन्धिविच्छेदं कुरुत — ग्रन्थोऽयम् = ______ + ______', answer:{ answerKey:'ग्रन्थः + अयम्।', schoolMethod:'ग्रन्थोऽयम् = ग्रन्थः + अयम्।' } },
          { id:'q3b', number:'३ (ख)', isHard:false, text:'सूर्याचलः = ______ + ______', answer:{ answerKey:'सूर्य + अचलः।', schoolMethod:'सूर्याचलः = सूर्य + अचलः।' } },
          { id:'q3c', number:'३ (ग)', isHard:false, text:'तथैव = ______ + ______', answer:{ answerKey:'तथा + एव।', schoolMethod:'तथैव = तथा + एव।' } },
          { id:'q3d', number:'३ (घ)', isHard:false, text:'कालातिगामिनी = ______ + ______', answer:{ answerKey:'काल + अतिगामिनी।', schoolMethod:'कालातिगामिनी = काल + अतिगामिनी।' } },
          { id:'q3e', number:'३ (ङ)', isHard:false, text:'प्रथमोपग्रहस्य = ______ + ______', answer:{ answerKey:'प्रथम + उपग्रहस्य।', schoolMethod:'प्रथमोपग्रहस्य = प्रथम + उपग्रहस्य।' } },
          { id:'q4a', number:'४ (क)', isHard:false, text:'अधोलिखितपदानां विपरीतार्थकपदानि लिखत — उदयः', answer:{ answerKey:'अस्तः।', schoolMethod:'उदयः — अस्तः।' } },
          { id:'q4b', number:'४ (ख)', isHard:false, text:'अचलः', answer:{ answerKey:'चलः।', schoolMethod:'अचलः — चलः।' } },
          { id:'q4c', number:'४ (ग)', isHard:false, text:'अन्धकारः', answer:{ answerKey:'प्रकाशः।', schoolMethod:'अन्धकारः — प्रकाशः।' } },
          { id:'q4d', number:'४ (घ)', isHard:false, text:'स्थिरः', answer:{ answerKey:'अस्थिरः (अथवा गतिशीलः)।', schoolMethod:'स्थिरः — अस्थिरः (अथवा गतिशीलः)।' } },
          { id:'q4e', number:'४ (ङ)', isHard:false, text:'समादरः', answer:{ answerKey:'अनादरः।', schoolMethod:'समादरः — अनादरः।' } },
          { id:'q4f', number:'४ (च)', isHard:false, text:'आकाशस्य', answer:{ answerKey:'पातालस्य (अथवा पृथिव्याः)।', schoolMethod:'आकाशस्य — पातालस्य (अथवा पृथिव्याः)।' } },
        ]
      },
      {
        id: 's2', title: 'क्रियाकलापः',
        questions: [
          { id:'q1', number:'१', isHard:false, text:'कस्यापि एकस्य भारतीय-विदुषः नाम तस्य कृतिं च लिखत, यः गणित-विज्ञान क्षेत्रे महत् योगदानं कृतवान् अस्ति।', answer:{ answerKey:'विदुषः नाम — वराहमिहिरः\nकृतिः (ग्रन्थः) — पञ्चसिद्धान्तिका (अथवा बृहत्संहिता)\nक्षेत्रम् — खगोलविज्ञानम्, गणितम् च', schoolMethod:'विदुषः नाम — वराहमिहिरः\nकृतिः (ग्रन्थः) — पञ्चसिद्धान्तिका (अथवा बृहत्संहिता)\nक्षेत्रम् — खगोलविज्ञानम्, गणितम् च' } },
          { id:'q2', number:'२', isHard:false, text:'आर्यभटं विहाय कस्यापि एकस्य भारतीयगणितज्ञस्य नामोल्लेखपूर्वकं तस्य प्रमुख-योगदानस्य संक्षिप्तं वर्णनं कुरुत।', answer:{ answerKey:'गणितज्ञस्य नाम — ब्रह्मगुप्तः\n\nब्रह्मगुप्तः महान् भारतीयः गणितज्ञः खगोलशास्त्री च आसीत्।\nतेन "ब्रह्मस्फुटसिद्धान्तः" इति प्रसिद्धः ग्रन्थः रचितः।\nसः गणिते शून्यस्य (0) नियमानां स्पष्टं गणितीयं वर्णनम् अकरोत्।\nतेन ऋणात्मक-धनात्मक-सङ्ख्यानां (Negative & Positive Numbers) गणितीय-नियमाः अपि प्रतिपादिताः।', schoolMethod:'गणितज्ञस्य नाम — ब्रह्मगुप्तः\n\nब्रह्मगुप्तः महान् भारतीयः गणितज्ञः खगोलशास्त्री च आसीत्।\nतेन "ब्रह्मस्फुटसिद्धान्तः" इति प्रसिद्धः ग्रन्थः रचितः।\nसः गणिते शून्यस्य (0) नियमानां स्पष्टं गणितीयं वर्णनम् अकरोत्।\nतेन ऋणात्मक-धनात्मक-सङ्ख्यानां (Negative & Positive Numbers) गणितीय-नियमाः अपि प्रतिपादिताः।' } },
        ]
      }
    ]
  },
];