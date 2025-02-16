import SectionText from "@/components/SectionText";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {

  const handelSubmit =(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(e.target.firstName.value);
    console.log(data);
  }

  return (
    <section className="container py-24">
      <SectionTitle tagName={"h3"}>Contact Us</SectionTitle>
      <SectionText>
        Any question or remarks? Just write us a message!
      </SectionText>
      <div className="mt-12 rounded-xl p-3 shadow-2xl">
        <div className="grid grid-cols-5 gap-12">
          <div className="left relative col-span-2 flex h-[650px] w-full flex-col justify-between overflow-hidden rounded-lg bg-[#FFF2EB] p-10 text-[#1F1F1F]">
            <div className="">
              <h2 className="mb-2.5 text-2xl font-semibold">
                Contact Information
              </h2>
              <p>Say something to start a live chat!</p>
            </div>
            <div className="space-y-10 text-[#1F1F1F]">
              <div className="card flex items-center gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.0002 10.999H22.0002C22.0002 5.869 18.1272 2 12.9902 2V4C17.0522 4 20.0002 6.943 20.0002 10.999Z"
                    fill="#1F1F1F"
                  />
                  <path
                    d="M13.0003 7.99999C15.1033 7.99999 16.0003 8.89699 16.0003 11H18.0003C18.0003 7.77499 16.2253 5.99999 13.0003 5.99999V7.99999ZM16.4223 13.443C16.2301 13.2683 15.9776 13.1752 15.7181 13.1832C15.4585 13.1912 15.2123 13.2998 15.0313 13.486L12.6383 15.947C12.0623 15.837 10.9043 15.476 9.71228 14.287C8.52028 13.094 8.15928 11.933 8.05228 11.361L10.5113 8.96699C10.6977 8.78612 10.8064 8.53982 10.8144 8.2802C10.8225 8.02059 10.7292 7.76804 10.5543 7.57599L6.85928 3.51299C6.68432 3.32035 6.44116 3.2035 6.18143 3.18725C5.92171 3.17101 5.66588 3.25665 5.46828 3.42599L3.29828 5.28699C3.12539 5.46051 3.0222 5.69145 3.00828 5.93599C2.99328 6.18599 2.70728 12.108 7.29928 16.702C11.3053 20.707 16.3233 21 17.7053 21C17.9073 21 18.0313 20.994 18.0643 20.992C18.3088 20.9783 18.5396 20.8747 18.7123 20.701L20.5723 18.53C20.7417 18.3325 20.8276 18.0768 20.8115 17.817C20.7954 17.5573 20.6788 17.3141 20.4863 17.139L16.4223 13.443Z"
                    fill="#1F1F1F"
                  />
                </svg>
                +1012 3456 789
              </div>
              <div className="card flex items-center gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                    fill="#1F1F1F"
                  />
                </svg>
                demo@gmail.com
              </div>
              <div className="card flex w-[70%] gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0"
                  fill="none"
                >
                  <path
                    d="M12 1.5C9.81276 1.50258 7.71584 2.3726 6.16923 3.91922C4.62261 5.46584 3.75259 7.56276 3.75001 9.75C3.74739 11.5374 4.33124 13.2763 5.41201 14.7C5.41201 14.7 5.63701 14.9963 5.67376 15.039L12 22.5L18.3293 15.0353C18.3623 14.9955 18.588 14.7 18.588 14.7L18.5888 14.6978C19.669 13.2747 20.2526 11.5366 20.25 9.75C20.2474 7.56276 19.3774 5.46584 17.8308 3.91922C16.2842 2.3726 14.1873 1.50258 12 1.5ZM12 12.75C11.4067 12.75 10.8266 12.5741 10.3333 12.2444C9.83995 11.9148 9.45543 11.4462 9.22837 10.8981C9.00131 10.3499 8.9419 9.74667 9.05765 9.16473C9.17341 8.58279 9.45913 8.04824 9.87869 7.62868C10.2982 7.20912 10.8328 6.9234 11.4147 6.80764C11.9967 6.69189 12.5999 6.7513 13.1481 6.97836C13.6962 7.20542 14.1648 7.58994 14.4944 8.08329C14.8241 8.57664 15 9.15666 15 9.75C14.999 10.5453 14.6826 11.3078 14.1202 11.8702C13.5578 12.4326 12.7954 12.749 12 12.75Z"
                    fill="#1F1F1F"
                  />
                </svg>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </div>
            </div>
            <div className="flex gap-6">
              <button className="group flex size-12 items-center justify-center rounded-full bg-white transition-all duration-200 hover:bg-primary">
                <FaTwitter className="size-6 text-primary transition-all duration-200 group-hover:text-white" />
              </button>
              <button className="group flex size-12 items-center justify-center rounded-full bg-white transition-all duration-200 hover:bg-primary">
                <FaInstagram className="size-6 text-primary transition-all duration-200 group-hover:text-white" />
              </button>
              <button className="group flex size-12 items-center justify-center rounded-full bg-white transition-all duration-200 hover:bg-primary">
                <FaDiscord className="size-6 text-primary transition-all duration-200 group-hover:text-white" />
              </button>
            </div>

            <div className="absolute -bottom-20 -right-20 size-[270px] rounded-full bg-[#E79264]">
              <div className="bg-[#E5B69C] absolute -top-6 -left-6 size-[140px] rounded-full"></div>
            </div>
          </div>

          <div className="right relative col-span-3">
            <form className="space-y-12 p-6" onSubmit={handelSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <fieldset className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-sm font-normal text-gray-600"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Dain"
                    className="h-8 rounded-none border-x-0 border-b border-t-0 px-0 focus-visible:border-gray-950 focus-visible:ring-0"
                  />
                </fieldset>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-sm font-normal text-gray-600"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Joe"
                    className="h-8 rounded-none border-x-0 border-b border-t-0 px-0 focus-visible:border-gray-950 focus-visible:ring-0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-normal text-gray-600"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="demo@gmail.com"
                    className="h-8 rounded-none border-x-0 border-b border-t-0 px-0 focus-visible:border-gray-950 focus-visible:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-normal text-gray-600"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 012 3456 789"
                    className="h-8 rounded-none border-x-0 border-b border-t-0 px-0 focus-visible:border-gray-950 focus-visible:ring-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-normal text-gray-600"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write your message..."
                  className="min-h-[100px] resize-none rounded-none border-x-0 border-b border-t-0 px-0 focus-visible:border-gray-950 focus-visible:ring-0"
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="rounded-full bg-[#FF5C1C] px-16 py-6 text-white hover:bg-[#FF5C1C]/90"
                >
                  Send Message
                </Button>
              </div>
            </form>

            <div className="absolute -bottom-5 right-28">
              <img
                src="https://i.ibb.co.com/nM12kyYr/arrow.png"
                alt=""
                className="w-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
