import { Button } from "@/components/shadcn/ui/button";
import profile from "@/assets/images/constructor.png";

const Message = () => {
  return (
    <div className="container my-14">
      <h1 className="mb-7 text-left text-3xl font-bold leading-[120%]">Chat</h1>

      <div className="grid grid-cols-5 gap-10">
        <div className="left col-span-2 flex h-[80vh] flex-col rounded-lg border px-5 py-7 shadow-2xl">
          <h2 className="mb-4 text-xl font-bold">All Messages</h2>
          <div className="flex-grow space-y-5 overflow-y-auto pr-4">
            {Array(12)
              .fill(null)
              .map((_, idx) => (
                <div className="flex gap-2 rounded bg-[#FFF2EB] p-4" key={idx}>
                  <figure className="size-10 overflow-hidden rounded-full">
                    <img
                      src={profile}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </figure>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-primary">
                        Jane Cooper
                      </p>
                      <p className="text-xs text-[#919EAB]">34 min ago</p>
                    </div>

                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-sm text-[#637381]">
                        Me: A new task titled Home jobs has ..
                      </p>
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <path
                            d="M6.35286 10.6504C3.01953 10.6504 3.01953 12.1421 3.01953 13.9837V14.8171C3.01953 17.1171 3.01953 18.9837 7.1862 18.9837H13.8529C17.1862 18.9837 18.0195 17.1171 18.0195 14.8171V13.9837C18.0195 12.1421 18.0195 10.6504 14.6862 10.6504C13.8529 10.6504 13.6195 10.8254 13.1862 11.1504L12.3362 12.0504C11.3529 13.1004 9.6862 13.1004 8.69453 12.0504L7.85286 11.1504C7.41953 10.8254 7.1862 10.6504 6.35286 10.6504Z"
                            stroke="#919EAB"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.3542 10.6502V5.65023C16.3542 3.80856 16.3542 2.31689 13.0208 2.31689H8.02083C4.6875 2.31689 4.6875 3.80856 4.6875 5.65023V10.6502"
                            stroke="#919EAB"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.3125 8.34229H12.0875"
                            stroke="#919EAB"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.61719 5.84229H12.7839"
                            stroke="#919EAB"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <path
                            d="M11.0375 17.9922C10.7542 18.0922 10.2875 18.0922 10.0042 17.9922C7.5875 17.1672 2.1875 13.7256 2.1875 7.89222C2.1875 5.31722 4.2625 3.23389 6.82083 3.23389C8.3375 3.23389 9.67917 3.96722 10.5208 5.10055C11.3625 3.96722 12.7125 3.23389 14.2208 3.23389C16.7792 3.23389 18.8542 5.31722 18.8542 7.89222C18.8542 13.7256 13.4542 17.1672 11.0375 17.9922Z"
                            stroke="#919EAB"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <Button className="mt-4 w-full">Contact Us</Button>
        </div>
        <div className="right col-span-3 flex h-[80vh] flex-col rounded-lg border px-5 py-7 shadow-2xl">
          <div className="flex gap-2 rounded border-b p-4">
            <figure className="size-10 overflow-hidden rounded-full">
              <img
                src={profile}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </figure>
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-primary">Jane Cooper</p>
                <p className="text-xs text-[#919EAB]">34 min ago</p>
              </div>

              <div className="mt-1 flex items-center justify-between">
                <p className="text-sm text-[#637381]">
                  Me: A new task titled Home jobs has ..
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M6.35286 10.6504C3.01953 10.6504 3.01953 12.1421 3.01953 13.9837V14.8171C3.01953 17.1171 3.01953 18.9837 7.1862 18.9837H13.8529C17.1862 18.9837 18.0195 17.1171 18.0195 14.8171V13.9837C18.0195 12.1421 18.0195 10.6504 14.6862 10.6504C13.8529 10.6504 13.6195 10.8254 13.1862 11.1504L12.3362 12.0504C11.3529 13.1004 9.6862 13.1004 8.69453 12.0504L7.85286 11.1504C7.41953 10.8254 7.1862 10.6504 6.35286 10.6504Z"
                      stroke="#919EAB"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.3542 10.6502V5.65023C16.3542 3.80856 16.3542 2.31689 13.0208 2.31689H8.02083C4.6875 2.31689 4.6875 3.80856 4.6875 5.65023V10.6502"
                      stroke="#919EAB"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.3125 8.34229H12.0875"
                      stroke="#919EAB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.61719 5.84229H12.7839"
                      stroke="#919EAB"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M11.0375 17.9922C10.7542 18.0922 10.2875 18.0922 10.0042 17.9922C7.5875 17.1672 2.1875 13.7256 2.1875 7.89222C2.1875 5.31722 4.2625 3.23389 6.82083 3.23389C8.3375 3.23389 9.67917 3.96722 10.5208 5.10055C11.3625 3.96722 12.7125 3.23389 14.2208 3.23389C16.7792 3.23389 18.8542 5.31722 18.8542 7.89222C18.8542 13.7256 13.4542 17.1672 11.0375 17.9922Z"
                      stroke="#919EAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow space-y-5 overflow-y-auto pr-4">
            {Array(12)
              .fill(null)
              .map((_, idx) => (
                <div className="flex gap-2 rounded bg-[#FFF2EB] p-4" key={idx}>
                  <figure className="size-10 overflow-hidden rounded-full">
                    <img
                      src={profile}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </figure>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-primary">
                        Jane Cooper
                      </p>
                      <p className="text-xs text-[#919EAB]">34 min ago</p>
                    </div>

                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-sm text-[#637381]">
                        Me: A new task titled Home jobs has ..
                      </p>
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <path
                            d="M6.35286 10.6504C3.01953 10.6504 3.01953 12.1421 3.01953 13.9837V14.8171C3.01953 17.1171 3.01953 18.9837 7.1862 18.9837H13.8529C17.1862 18.9837 18.0195 17.1171 18.0195 14.8171V13.9837C18.0195 12.1421 18.0195 10.6504 14.6862 10.6504C13.8529 10.6504 13.6195 10.8254 13.1862 11.1504L12.3362 12.0504C11.3529 13.1004 9.6862 13.1004 8.69453 12.0504L7.85286 11.1504C7.41953 10.8254 7.1862 10.6504 6.35286 10.6504Z"
                            stroke="#919EAB"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.3542 10.6502V5.65023C16.3542 3.80856 16.3542 2.31689 13.0208 2.31689H8.02083C4.6875 2.31689 4.6875 3.80856 4.6875 5.65023V10.6502"
                            stroke="#919EAB"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.3125 8.34229H12.0875"
                            stroke="#919EAB"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.61719 5.84229H12.7839"
                            stroke="#919EAB"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <path
                            d="M11.0375 17.9922C10.7542 18.0922 10.2875 18.0922 10.0042 17.9922C7.5875 17.1672 2.1875 13.7256 2.1875 7.89222C2.1875 5.31722 4.2625 3.23389 6.82083 3.23389C8.3375 3.23389 9.67917 3.96722 10.5208 5.10055C11.3625 3.96722 12.7125 3.23389 14.2208 3.23389C16.7792 3.23389 18.8542 5.31722 18.8542 7.89222C18.8542 13.7256 13.4542 17.1672 11.0375 17.9922Z"
                            stroke="#919EAB"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex gap-2 rounded bg-[#FFF2EB] p-4 mt-4">
            <div className="">
            <figure className="size-10 overflow-hidden rounded-full">
              <img
                src={profile}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </figure>
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-primary">Jane Cooper</p>
                <p className="text-xs text-[#919EAB]">34 min ago</p>
              </div>
            </div>
            </div>
            <div className="">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
