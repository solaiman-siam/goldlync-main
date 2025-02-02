import { useId } from "react";

function RatingStar({ rate, ...props }) {
  const id = useId(); // Generate a unique ID for this instance
  const rateNum = parseFloat(rate);
  const rate1 = rateNum >= 1 ? 100 : rateNum * 100;
  const rate2 = rateNum >= 2 ? 100 : Math.max(0, rateNum - 1) * 100;
  const rate3 = rateNum >= 3 ? 100 : Math.max(0, rateNum - 2) * 100;
  const rate4 = rateNum >= 4 ? 100 : Math.max(0, rateNum - 3) * 100;
  const rate5 = rateNum >= 5 ? 100 : Math.max(0, rateNum - 4) * 100;

  console.log(props);

  return (
    <div className="flex gap-[2px]">
      {[rate1, rate2, rate3, rate4, rate5].map((rate, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
          fill="none"
          {...props}
        >
          <defs>
            <linearGradient
              id={`gradient-fill-${index}-${id}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset={`${rate}%`} stopColor="#FF6A16" />
              <stop offset={`${rate}%`} stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <path
            d="M6 0.5L7.54117 4.37876L11.7063 4.6459L8.49367 7.31024L9.52671 11.3541L6 9.122L2.47329 11.3541L3.50633 7.31024L0.293661 4.6459L4.45883 4.37876L6 0.5Z"
            fill={`url(#gradient-fill-${index}-${id})`}
            stroke="#FF6A16"
            strokeWidth="0.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}

export default RatingStar;
