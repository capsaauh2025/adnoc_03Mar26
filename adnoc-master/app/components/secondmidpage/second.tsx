import icon1 from "@/public/images/icon1.png";
import icon2 from "@/public/images/icon2.png";
import icon3 from "@/public/images/icon3.png";
import Image from "next/image";

const SecondMid = ({ lang }: any) => {
  let content;
  if (lang === "ar") {
    content = (
      <div className="main section3">
        <div className="container">
          <div className="mt-60px mb-14">
            <div className="flex justify-center">
              <h3
                className="font-semibold text1 text-xl text-start md:text-start md:text-2xl font-custom 
              "
              >
                {`الطريق الأكثر أمانًا للتحدث إلى مؤسستك`}
              </h3>
            </div>

            <div></div>

            <div className="flex items-center ">
              <div className="flex flex-col-reverse md:flex-row items-end gap-6">
                <div className="flex flex-col md:mb-0 basis-1/3">
                  <div className=" rounded overflow-hidden shadow-lg">
                    <div className="mx-auto mr-5" style={{ direction: 'rtl', }}>
                      <Image src={icon3} alt="Logo" width={50} height={50} />
                    </div>
                    <div className="px-6 py-4 font-custom">
                      <div className="font-bold text-xl mb-2" style={{ direction: 'rtl', }}>
                        ابقَ على تواصل
                      </div>
                      <p className="text-gray-700 text-sm" style={{ direction: 'rtl', }}>
                        {`على الرغم من إخفاء هويتك تمامًا، يمكنك مواصلة التواصل مع المكلفين بتولي حالتك، كما يمكنك بكل سهولة متابعة التقدم المُحرز والإجابة عن أي أسئلة مطروحة للمتابعة.`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mb-8 md:mb-0 basis-1/3">
                  <div className=" rounded overflow-hidden shadow-lg">
                    <div className="mx-auto mr-5" style={{ direction: 'rtl', }}>
                      <Image src={icon2} alt="Logo" width={50} height={50} />
                    </div>
                    <div className="px-6 py-4 font-custom">
                      <div className="font-bold text-xl mb-2" style={{ direction: 'rtl', }}>
                        لا يمكن تتبعك
                      </div>
                      <p className="text-gray-700 text-sm" style={{ direction: 'rtl', }}>
                        {`ليس لدى ADNOC سبيل للوصول إلى بيانات الاتصال الخاصة بك، فسيتم حذف تفاصيل الهاتف أو عناوين التعريف الرقمي للأجهزة المتصلة بالانترنت في كل مرة، وسيتم تشفير كافة المحتوى باستخدام المعايير عالية الجودة لدينا.`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mb-8 md:mb-0 basis-1/3">
                  <div className="rounded overflow-hidden shadow-lg">
                    <div className="mx-auto mr-5" style={{ direction: 'rtl', }}>
                      <Image src={icon1} alt="Logo" width={50} height={50} />
                    </div>
                    <div className="px-6 py-4 font-custom">
                      <div className="font-bold text-xl mb-2" style={{ direction: 'rtl', }}>
                        يمكنك إخفاء هويتك
                      </div>
                      <p className="text-gray-700 text-sm" style={{ direction: 'rtl', }}>
                        {`لن تتم مشاركة هويتك مع ADNOC. ستتمتع بتحكم كامل في محتوى الرسالة التي ستتركها، وإذا لم تترك تفاصيل الاتصال الخاصة بك، فلن يتمكن أحد من معرفة هويتك`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="main section3">
        <div className="container">
          <div className="mt-60px mb-14">
            <div className="flex justify-center">
              <h3
                className="font-semibold text1 text-xl text-start md:text-start md:text-2xl font-custom 
            "
              >
                The Safest way to talk to your organisation
              </h3>
            </div>

            <div></div>

            <div className="flex items-center ">
              <div className="flex flex-col md:flex-row items-end gap-6">
                <div className="flex flex-col mb-8 md:mb-0 basis-1/3">
                  <div className="rounded overflow-hidden shadow-lg">
                    <div className="mx-auto ml-5">
                      <Image src={icon1} alt="Logo" width={50} height={50} />
                    </div>
                    <div className="px-6 py-4 font-custom">
                      <div className="font-bold text-xl mb-2">
                        You can be anonymous
                      </div>
                      <p className="text-gray-700 text-sm">
                        Your identity will not be shared with ADNOC. You are in
                        total control of the content of the message you leave.
                        If you do not leave your contact details, no one will
                        know who you are.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mb-8 md:mb-0 basis-1/3">
                  <div className=" rounded overflow-hidden shadow-lg">
                    <div className="mx-auto ml-5">
                      <Image src={icon2} alt="Logo" width={50} height={50} />
                    </div>
                    <div className="px-6 py-4 font-custom">
                      <div className="font-bold text-xl mb-2">
                        You cannot be tracked
                      </div>
                      <p className="text-gray-700 text-sm">
                        ADNOC has no access to you connection data. Phone
                        details or IP-addresses will be deleted every single
                        time and all content is encrypted using our high-grade
                        standards.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:mb-0 basis-1/3">
                  <div className=" rounded overflow-hidden shadow-lg">
                    <div className="mx-auto ml-5">
                      <Image src={icon3} alt="Logo" width={50} height={50} />
                    </div>
                    <div className="px-6 py-4 font-custom">
                      <div className="font-bold text-xl mb-2">
                        Stay in touch
                      </div>
                      <p className="text-gray-700 text-sm">
                        Even though you are completely anonymous, you can
                        continue to communicate with the case handlers. You can
                        easily follow the progress and answer any follow-up
                        questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default SecondMid;
