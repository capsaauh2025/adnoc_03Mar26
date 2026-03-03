"use client";

import { SiAddthis } from "react-icons/si";
import { useState } from "react";
import { PiMinusFill } from "react-icons/pi";
import { TbSquareMinusFilled } from "react-icons/tb";

const Third = ({ lang }:any) => {
  const [isFirstExpanded, setIsFirstExpanded] = useState(false);
  const [isSecondExpanded, setIsSecondExpanded] = useState(false);
  const [isThirdExpanded, setIsThirdExpanded] = useState(false);
  const [isFourthExpanded, setIsFourthExpanded] = useState(false);
  const [isFifthExpanded, setIsFifthExpanded] = useState(false);
  const [isSixthExpanded, setIsSixthExpanded] = useState(false);

  const toggleQ1Expansion = () => {
    setIsFirstExpanded(!isFirstExpanded);
  };

  const toggleQ2Expansion = () => {
    setIsSecondExpanded(!isSecondExpanded);
  };

  const toggleQ3Expansion = () => {
    setIsThirdExpanded(!isThirdExpanded);
  };

  const toggleQ4Expansion = () => {
    setIsFourthExpanded(!isFourthExpanded);
  };

  const toggleQ5Expansion = () => {
    setIsFifthExpanded(!isFifthExpanded);
  };

  const toggleQ6Expansion = () => {
    setIsSixthExpanded(!isSixthExpanded);
  };

  let content;
  if (lang === "ar") {
    content = (
      <div className="main section4 " >
        <div className="container">
          <div className={`font-custom`} >
            <div className="flex justify-start" style={{direction: 'rtl',}}>
              <h3
                className="text-blue-900 font-semibold text-xl  pb-3 text-start md:text-end md:text-2xl font-custom 
            "
             >
                الأسئلة الشائعة
              </h3>
            </div>
            <div className="mb-20 " style={{direction: 'rtl',}}>
              <div className="mt-5 " >
                <div className="flex items-center" onClick={toggleQ1Expansion}>
                  <div className="flex items-center">
                    {isFirstExpanded ? <PiMinusFill /> : <SiAddthis />}
                    <div className="mr-3 text-lg">
                      <p>ما هو خط Takallam؟</p>
                    </div>
                  </div>
                </div>
                {isFirstExpanded && (
                  <div className="mt-3 pr-3  md:w-[70%] text-gray-600 font-custom">
                    <p className="font-custom">
                    خط Takallam (تحدَّث بالعربية) هو خط مساعدة معني بأخلاقيات العمل تديره شركة SpeakUp، وهي طرف ثالث مستقل، نيابةً عن مجموعة ADNOC. وتشجع ADNOC الجميع داخل المجموعة أو خارجها على الإبلاغ عن المخاوف المتعلقة بأخلاقيات العمل ونزاهته المتورط فيها موظفون من داخل مجموعة ADNOC أو أطراف أخرى تعمل مع المجموعة أو لديها.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-5">
                <div className="flex items-center" onClick={toggleQ2Expansion}>
                  <div className="flex items-center">
                    {isSecondExpanded ? <PiMinusFill /> : <SiAddthis />}
                    <div className="mr-3 text-lg">
                      <p>ما أنواع المخاوف التي يمكنني الإبلاغ عنها عبر خط Takallam؟</p>
                    </div>
                  </div>
                </div>
                {isSecondExpanded && (
                  <div className="mt-3 md:w-[70%] pl-1 pr-3 text-gray-600">
                    <p>
                      يمكنك الإبلاغ عن أي نوع من أنواع المخاوف المتعلقة بالامتثال المُدرجة أدناه. يُرجى ملاحظة أن خط Takallam غير معني بالإبلاغ عن المخاوف المتعلقة بالكفالة أو التوظيف (مثل التعيين والترقيات والرواتب). وفي حال الإبلاغ عن أي مخاوف من هذا النوع عبر Takallam، فلن تُحال إلى قسم الموارد البشرية، وسيتم إغلاق الحالة دون مزيد من المراجعة. 
                      <br></br>• الرشوة والفساد والاحتيال وغسيل الأموال وغيرها من أنواع المخالفات المالية
                      <br></br>• تضارب المصالح
                      <br></br>• الإفصاح عن معلومات سرية
                      <br></br>• التمييز أو المضايقة أو التنمر
                      <br></br>• الانتقام
                      <br></br>• الممارسات الشرائية غير الملائمة
                      <br></br>• الاستخدام غير الملائم للهدايا والمزايا الترفيهية
                      <br></br>• التداول بناء على معلومات سرية 
                      <br></br>• السلوكيات المناهضة للمنافسة
                      <br></br>• خرق حقوق الملكية الفكرية
                      <br></br>• الأمن الإلكتروني وسوء استخدام وسائل التواصل الاجتماعي
                      <br></br>• خرق العقوبات الدولية
                      <br></br>• الانتهاكات الأخرى لسياسات الامتثال لدى مجموعة ADNOC
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-5 ">
                <div className="flex items-center" onClick={toggleQ3Expansion}>
                  <div className="flex items-center">
                    {isThirdExpanded ? <PiMinusFill /> : <SiAddthis />}
                    <div className="mr-3 text-lg">
                      <p>هل يمكن اكتشاف هويتي؟</p>
                    </div>
                  </div>
                </div>
                {isThirdExpanded && (
                  <div className="pl-1 pr-3 md:w-[70%] text-gray-600 mt-5">
                    <p>
                    لن تتم مشاركة هويتك مع المؤسسة، وسيعود إليك بالكامل محتوى الرسالة التي تتركها.
                      <br></br> <br></br>إذا تركت تفاصيل الاتصال الخاصة بك في رسالتك، فستقوم ®SpeakUp بإعادة توجيهها؛ وإذا لم تترك تفاصيل الاتصال الخاصة بك، فلن تتمكن ®SpeakUp أو المؤسسة من معرفة هويتك. 
                      <br></br> <br></br>إذا تركت رسالة عبر الهاتف، فستتلقى المؤسسة نصًا حرفيًا مكتوبًا لما قلته.
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <div
                  className="flex items-center font-custom"
                  onClick={toggleQ4Expansion}
                >
                  <div className="flex items-center">
                    {isFourthExpanded ? <PiMinusFill /> : <SiAddthis />}
                    <div className="mr-3 text-lg">
                      <p>هل يمكن للشركة تتبع بيانات الاتصال الخاصة بي؟</p>
                    </div>
                  </div>
                </div>
                {isFourthExpanded && (
                  <div className=" pl-1 pr-3 md:w-[70%] text-gray-600 mt-5">
                    <p>
                    لا. شركة ®SpeakUp تخضع لإدارة People Intouch، ولا يمكن للمؤسسة الوصول إلى بيانات الاتصال، ولن يتم أبدًا تقديم تفاصيل الهاتف أو عناوين التعريف الرقمي للأجهزة المتصلة بالانترنت. مع ذلك، قد يمكن لمؤسستك تتبع معلومات المستخدم من خلال الهاتف أو جهاز الكمبيوتر الخاص بالشركة. لاحظ أنه بإمكانك أيضًا استخدام هاتف أو جهاز كمبيوتر عام أو غير قابل للتعريف.
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <div className="flex items-center" onClick={toggleQ5Expansion}>
                  <div className="flex items-center">
                    {isFifthExpanded ? <PiMinusFill /> : <SiAddthis />}
                    <div className="mr-3 text-lg">
                      <p>متى يمكنني توقع تلقي رد؟</p>
                    </div>
                  </div>
                </div>
                {isFifthExpanded && (
                  <div className="pl-1 pr-3 md:w-[70%] text-gray-600 mt-3">
                    <p>
                    يمكنك توقع تلقي رد مبدئي من المؤسسة في غضون أسبوع، لذلك يُنصح بتسجيل الدخول إلى بلاغك على SpeakUp وتفقد الرد بشكل منتظم.
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <div className="flex items-center" onClick={toggleQ6Expansion}>
                  <div className="flex items-center">
                    {isSixthExpanded ? <PiMinusFill /> : <SiAddthis />}
                    <div className="mr-3 text-lg">
                      <p>ماذا يحدث إذا لم أتمكن من تذكر رقم البلاغ؟</p>
                    </div>
                  </div>
                </div>
                {isSixthExpanded && (
                  <div className="pl-1 pr-3 md:w-[70%] text-gray-600 mt-5">
                    <p>
                    إذا لم تتمكن من تذكر الرقم الفريد للبلاغ، فإننا نوصي بترك رسالة جديدة من خلال ®SpeakUp.<br></br>
                      <br></br>
                      يُرجى ملاحظة أن حالات المخاوف المتعلقة بالتوظيف (مثل الرواتب أو التعيين أو إنهاء الخدمة أو الميزات أو نوبات العمل أو فترات التناوب أو تقييم الأداء) التي يتم الإبلاغ عنها عبر هذه القناة سيتم إغلاقها دون مزيد من المراجعة، ولن يُعاد توجيهها إلى إدارة رأس المال البشري. فإذا رغبت في الإبلاغ عن أي مشكلات متعلقة بالتوظيف، فانتقل إلى اسأل إدارة رأس المال البشري المتوفر على ONE ADNOC eServices أو اتصل بالرقم المباشر 70046 707 02 أو الرقم المجاني 800400.
                      <br></br>
                      <br></br>
                      خط Takallam ليس قناة للطوارئ. فإذا كانت لديك أي مخاوف تتصل بتهديد مادي مباشر لأي فرد داخل منشأة من منشآت مجموعة ADNOC أو بأصل من أصول مجموعة ADNOC، فيُرجى الإبلاغ عنها فورًا على الرقم 999 أو بالتوجه إلى قسم الأمن بشركتك التابعة لمجموعة ADNOC.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="main section4">
        <div className="container">
          <div className={`font-custom`}>
            <div className="flex justify-start">
              <h3
                className="text-blue-900 font-semibold text-xl  pb-3 text-start md:text-start md:text-2xl font-custom 
            "
              >
                FAQs
              </h3>
            </div>
            <div className="mb-20 ">
              <div className="mt-5 ">
                <div className="flex items-center" onClick={toggleQ1Expansion}>
                  <div className="flex items-center">
                    {isFirstExpanded ? <PiMinusFill /> : <SiAddthis />}
                    <div className="ml-3 text-lg">
                      <p>What is Takallam?</p>
                    </div>
                  </div>
                </div>
                {isFirstExpanded && (
                  <div className="mt-3 pr-3  md:w-[70%] text-gray-600 font-custom">
                    <p className="font-custom">
                      Takallam (which means “to speak” in Arabic) is an Ethics
                      Helpline run by SpeakUp, an independent third party, on
                      behalf of the ADNOC Group.  ADNOC encourages anyone inside
                      or outside the ADNOC Group to raise business ethics and
                      integrity concerns involving ADNOC Group employees or
                      third parties working with or for the ADNOC Group.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-5">
                <div className="flex items-center" onClick={toggleQ2Expansion}>
                  <div className="flex items-center">
                    {isSecondExpanded ? <PiMinusFill /> : <SiAddthis />}
                    <div className="ml-3 text-lg">
                      <p>What types of concerns can I raise on Takallam?</p>
                    </div>
                  </div>
                </div>
                {isSecondExpanded && (
                  <div className="mt-3 md:w-[70%] pl-1 pr-3 text-gray-600">
                    <p>
                      You can raise any of the types of Compliance concerns
                      listed below. Please note that Takallam is not meant for
                      raising security or employment-related concerns (e.g.
                      recruitment, promotion, salaries). If raised on Takallam,
                      these types of concerns will not be referred to HR and
                      will be closed without further review. <br></br>• Bribery,
                      corruption, fraud, money laundering and other types of
                      financial misconduct <br></br>• Conflict of Interest
                      <br></br>• Disclosure of Confidential Information
                      <br></br>• Discrimination, Harassment or Bullying
                      <br></br>• Retaliation <br></br>• Improper Procurement
                      Practices <br></br>• Improper Use of Gifts & Entertainment
                      <br></br>• Insider Trading <br></br>• Anti-competitive
                      behavior <br></br>• Breach of Intellectual Property Rights
                      <br></br>• Cybersecurity & Misuse of Social Media
                      <br></br>• Breach of International Sanctions <br></br>•
                      Other violation of ADNOC Group Compliance policies
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-5 ">
                <div className="flex items-center" onClick={toggleQ3Expansion}>
                  <div className="flex items-center">
                    {isThirdExpanded ? <PiMinusFill /> : <SiAddthis />}
                    <div className="ml-3 text-lg">
                      <p>Can my identity be discovered?</p>
                    </div>
                  </div>
                </div>
                {isThirdExpanded && (
                  <div className="pl-1 pr-3 md:w-[70%] text-gray-600 mt-5">
                    <p>
                      Your identity will not be shared with the organisation.
                      You are in total control of the content of the message you
                      leave.
                      <br></br> <br></br>If you leave your contact details in
                      your message, SpeakUp® will forward it; if you do not
                      leave your contact details, SpeakUp® and the organisation
                      will not know who you are. <br></br> <br></br>If you leave
                      a message via Phone, the organisation will receive a typed
                      word-for-word transcript of what you have said.
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <div
                  className="flex items-center font-custom"
                  onClick={toggleQ4Expansion}
                >
                  <div className="flex items-center">
                    {isFourthExpanded ? <PiMinusFill /> : <SiAddthis />}
                    <div className="ml-3 text-lg">
                      <p>Can the company trace my connection data?</p>
                    </div>
                  </div>
                </div>
                {isFourthExpanded && (
                  <div className=" pl-1 pr-3 md:w-[70%] text-gray-600 mt-5">
                    <p>
                      No, SpeakUp® is operated by People Intouch. The
                      organisation has no access to the connection data. Phone
                      details or IP-addresses will never be handed. However, it
                      could be that your organisation traces user information
                      from your company telephone or computer, note that you can
                      use a public or non-identifiable telephone or computer as
                      well.
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <div className="flex items-center" onClick={toggleQ5Expansion}>
                  <div className="flex items-center">
                    {isFifthExpanded ? <PiMinusFill /> : <SiAddthis />}
                    <div className="ml-3 text-lg">
                      <p>When can I expect a reply?</p>
                    </div>
                  </div>
                </div>
                {isFifthExpanded && (
                  <div className="pl-1 pr-3 md:w-[70%] text-gray-600 mt-3">
                    <p>
                      You can expect an initial response from the organization
                      within one week. It is advised to login to your report in
                      SpeakUp and check for a response regularly.
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <div className="flex items-center" onClick={toggleQ6Expansion}>
                  <div className="flex items-center">
                    {isSixthExpanded ? <PiMinusFill /> : <SiAddthis />}
                    <div className="ml-3 text-lg">
                      <p>What happens if I can’t remember my Report Number?</p>
                    </div>
                  </div>
                </div>
                {isSixthExpanded && (
                  <div className="pl-1 pr-3 md:w-[70%] text-gray-600 mt-5">
                    <p>
                      If you can’t remember your unique Report Number, we advise
                      you to leave a new message via SpeakUp®.<br></br>
                      <br></br>
                      Please note that employment-related concerns (e.g.,
                      salary, hiring, termination, benefits, work shifts or
                      rotation, performance evaluation) raised on this channel
                      will be CLOSED without further review and will NOT be
                      redirected to Human Capital. Should you wish to raise any
                      employment related issues, go to “Ask Human Capital”
                      available in ONE ADNOC eServices or by calling the direct
                      number 02 707 70046 or the toll-free number 800400.
                      <br></br>
                      <br></br>
                      Takallam is not an emergency channel. Should you have any
                      concerns involving an immediate physical threat to an
                      individual on ADNOC Group’s premises or to an asset
                      belonging to ADNOC Group, please report it immediately to
                      999 or Security at your ADNOC Group company.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default Third;
