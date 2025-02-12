import HelpDeskBanner from "@/assets/images/online-help-desk-banner.png";
import { Button } from "@/components/shadcn/ui/button";
import { useState } from "react";
const OnlineHelpdesk = () => {
  const [ques, setQues] = useState(null);
  return (
    <div>
      <figure className="h-[650px] w-full overflow-hidden">
        <img
          src={HelpDeskBanner}
          alt=""
          className="size-full object-cover object-center"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2">
          <h2 className="mb-7 text-center text-4xl font-bold text-white">
            Online helpdesk
          </h2>
          <form className="flex justify-center gap-6">
            <input
              type="text"
              className="w-[780px] rounded-full border border-white bg-[#FFFFFFCC] px-8 py-4 outline-primary placeholder:text-[#363636]"
              placeholder="Submit your message here"
            />
            <Button type="submit" className="">
              Contact Us
            </Button>
          </form>
        </div>
      </figure>

      <div className="container my-24">
        <h2 className="mb-6 text-2xl font-bold text-primary">
          Help Desk Questionnaires
        </h2>
        {ques === null ? (
          ""
        ) : (
          <div className="text-[#2D2F34]/70">
            <p className="mb-4 font-semibold text-primary">
              Question {ques}: Answer goes here. This is a sample answer for
              demonstration purposes only. Please replace with actual answer
              from the selected question.
            </p>
            <p className="mb-2">
              Mollis libero venenatis etiam dictum ut. Sit tortor integer
              pharetra vitae tellus ipsum amet. Nec amet eu egestas varius
              luctus. Suspendisse sed a ut eu. Convallis hendrerit auctor
              lobortis id tristique.Dictumst id proin sit sagittis ultrices
              tempor sed purus. Morbi suspendisse ut urna purus eu tempor porta
              tristique ut. Odio eget nunc fermentum platea. Eget erat turpis
              nulla at tincidunt convallis porttitor. In faucibus morbi
              convallis in eget arcu posuere. Sodales venenatis elementum
              tristique magna parturient. <br /><br /> Vulputate eleifend placerat massa
              quisque integer turpis. Vulputate dictum tristique id tincidunt.
              Consectetur facilisi tristique cras morbi purus. In cras molestie
              elementum est nulla in interdum pharetra faucibus. Purus magnis
              suscipit quis ut quisque scelerisque urna pellentesque vitae. Arcu
              dignissim suscipit venenatis pulvinar sed arcu eros. <br /><br /> Scelerisque
              tempor orci nunc morbi facilisis ac. Parturient nam auctor
              porttitor mattis ac pretium nascetur sit fermentum. Nisl potenti
              cursus proin commodo tellus lectus eu sed. Non urna lectus est id
              leo. At commodo a odio sem facilisis ut scelerisque.
              PorttitDiamhabitasse eu adipiscing iaculis. Enim convallis viverra
              nunc sit a et eget metus. Imperdiet suscipit ut purus habitasse.
              Elementum egestas mi fermentum ultricies ornare interdum diam.
              Varius pulvinar sit commodo lorem vitae. Fames tincidunt viverra
              mauris at.
            </p>
            <br />
            <p>
              Note: The answers provided here are for demonstration purposes
              only and should not be considered as a substitute for professional
              advice. Please consult with a licensed mental health professional
              for personalized guidance.
            </p>
          </div>
        )}
        <div className="mt-12 grid grid-cols-3 gap-x-10 gap-y-7 font-manrope">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="cursor-pointer rounded border p-4"
                onClick={() => setQues(index + 1)}
              >
                <p>{index + 1}. Question goes here</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineHelpdesk;
