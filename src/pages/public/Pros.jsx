import { Link } from "react-router";
import profile from "@/assets/images/constructor.png";
import RatingStar from "@/components/shared/RatingStar";
import { Button } from "@/components/shadcn/ui/button";
import { useState } from "react";

const Pros = () => {
  const constructors = [
    {
      id: 1,
      name: "Fedarel Paintoren",
      profession: "House Cleaner",
      trust_badge: "Highly Trusted by Customers",
      rating: {
        score: 4.9,
        reviews: 120,
      },
      services: [
        "Available for Residential & Commercial Services",
        "Fast and reliable communication!",
      ],
    },
    {
      id: 2,
      name: "John Doe",
      profession: "Electrician",
      trust_badge: "Certified Professional",
      rating: {
        score: 4.8,
        reviews: 98,
      },
      services: [
        "Residential & Commercial Electrical Services",
        "24/7 Emergency Services",
      ],
    },
    {
      id: 3,
      name: "Jane Smith",
      profession: "Plumber",
      trust_badge: "Highly Recommended",
      rating: {
        score: 4.7,
        reviews: 150,
      },
      services: ["Expert Plumbing Services", "Quick and Efficient Repairs"],
    },
    {
      id: 4,
      name: "Michael Johnson",
      profession: "Carpenter",
      trust_badge: "Top Rated",
      rating: {
        score: 4.9,
        reviews: 200,
      },
      services: ["Custom Carpentry Services", "High-Quality Craftsmanship"],
    },
    {
      id: 5,
      name: "Emily Davis",
      profession: "Painter",
      trust_badge: "Customer Favorite",
      rating: {
        score: 4.8,
        reviews: 110,
      },
      services: ["Interior & Exterior Painting", "Affordable Rates"],
    },
    {
      id: 6,
      name: "David Wilson",
      profession: "Gardener",
      trust_badge: "Eco-Friendly",
      rating: {
        score: 4.7,
        reviews: 85,
      },
      services: ["Organic Gardening Services", "Landscape Design"],
    },
    {
      id: 7,
      name: "Sarah Brown",
      profession: "Roofer",
      trust_badge: "Highly Skilled",
      rating: {
        score: 4.9,
        reviews: 130,
      },
      services: ["Roof Installation & Repair", "Free Estimates"],
    },
    {
      id: 8,
      name: "Chris Lee",
      profession: "HVAC Technician",
      trust_badge: "Licensed and Insured",
      rating: {
        score: 4.8,
        reviews: 95,
      },
      services: ["Heating & Cooling Services", "Energy-Efficient Solutions"],
    },
    {
      id: 9,
      name: "Jessica Martinez",
      profession: "Cleaner",
      trust_badge: "Reliable and Trustworthy",
      rating: {
        score: 4.7,
        reviews: 140,
      },
      services: ["Residential & Commercial Cleaning", "Flexible Scheduling"],
    },
  ];

  const [selectedConstructors, setSelectedConstructors] = useState([]);

  const handleConnect = (id) => {
    setSelectedConstructors((prevSelected) => {
      if (!prevSelected.includes(id)) {
        return [...prevSelected, id];
      }
      return prevSelected;
    });
    console.log(selectedConstructors);
  };

  const handleRemove = (id) => {
    setSelectedConstructors((prevSelected) =>
      prevSelected.filter((constructorId) => constructorId !== id)
    );
    console.log(selectedConstructors);
  };

  return (
    <div className="container my-14">
      <div className="mx-auto mb-16 w-[60%] text-center">
        <h1 className="mb-4 text-5xl font-bold leading-[120%]">
          Your Trusted Painting Experts – Fast, Reliable, and Affordable!
        </h1>
        <p className="text-lg">
          Connect with trusted professionals, set your budget, and bring your
          vision to life—all in one place.
        </p>
      </div>

      <div className="">
        {selectedConstructors.length != 0 && (
          <div>
            <p className="mb-6 text-4xl font-bold">Your Selected Pro&apos;s</p>
            <div className="mb-6 grid grid-cols-3 gap-x-5 gap-y-6">
              {constructors
                .filter((constructor) =>
                  selectedConstructors.includes(constructor.id)
                )
                .map((constructor, idx) => (
                  <div
                    key={idx}
                    className="card rounded-lg border border-accent p-5"
                  >
                    <div className="mb-6 flex items-center gap-2.5 rounded bg-[#FFF2EB] px-4 py-2.5 text-left">
                      <figure className="size-14 overflow-hidden rounded-full">
                        <img
                          src={profile}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </figure>
                      <div className="">
                        <p className="text-xl text-primary">
                          {constructor.name}
                        </p>
                        <p className="text-sm text-[#637381]">
                          {constructor.profession}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M24 12.9625C24 13.9871 22.7446 14.8087 22.4862 15.7779C22.2277 16.7471 22.8923 18.1133 22.3938 18.9625C21.8954 19.8118 20.3815 19.9318 19.68 20.6425C18.9785 21.3533 18.8677 22.8579 18 23.3564C17.1323 23.8548 15.7846 23.1902 14.8154 23.4487C13.8462 23.7071 13.0246 24.9625 12 24.9625C10.9754 24.9625 10.1538 23.7071 9.23077 23.4487C8.30769 23.1902 6.89538 23.8548 6.04615 23.3564C5.19692 22.8579 5.07692 21.3441 4.36615 20.6425C3.65538 19.941 2.15077 19.8302 1.65231 18.9625C1.15385 18.0948 1.81846 16.7471 1.56 15.7779C1.30154 14.8087 0 13.9871 0 12.9625C0 11.9379 1.25538 11.1164 1.51385 10.1933C1.77231 9.27022 1.10769 7.85791 1.60615 7.00868C2.10462 6.15945 3.61846 5.99329 4.32 5.28252C5.02154 4.57176 5.13231 3.06714 6 2.56868C6.86769 2.07022 8.21538 2.73483 9.18462 2.47637C10.1538 2.21791 10.9754 0.962524 12 0.962524C13.0246 0.962524 13.8462 2.21791 14.8154 2.47637C15.7846 2.73483 17.1508 2.07022 18 2.56868C18.8492 3.06714 18.9692 4.58099 19.68 5.28252C20.3908 5.98406 21.8954 6.09483 22.3938 6.96252C22.8923 7.83022 22.2277 9.17791 22.4862 10.1471C22.7446 11.1164 24 11.9379 24 12.9625Z"
                            fill="#109138"
                          />
                          <path
                            d="M12.0005 20.8087C16.3338 20.8087 19.8466 17.2958 19.8466 12.9625C19.8466 8.62921 16.3338 5.11636 12.0005 5.11636C7.66714 5.11636 4.1543 8.62921 4.1543 12.9625C4.1543 17.2958 7.66714 20.8087 12.0005 20.8087Z"
                            fill="#20BF55"
                          />
                          <path
                            d="M11.197 15.1504C11.106 15.1508 11.0159 15.133 10.9319 15.0982C10.8478 15.0633 10.7716 15.012 10.7077 14.9473L8.55696 12.8334C8.42731 12.7036 8.35449 12.5277 8.35449 12.3442C8.35449 12.1607 8.42731 11.9848 8.55696 11.855C8.68677 11.7253 8.86273 11.6525 9.04619 11.6525C9.22965 11.6525 9.40561 11.7253 9.53542 11.855L11.197 13.4981L14.4647 10.2765C14.5956 10.1468 14.7728 10.0744 14.9571 10.0752C15.1415 10.0761 15.318 10.1502 15.4477 10.2811C15.5775 10.4121 15.6499 10.5893 15.649 10.7736C15.6482 10.958 15.5741 11.1345 15.4431 11.2642L11.677 14.9565C11.6146 15.0202 11.5398 15.0702 11.4572 15.1036C11.3746 15.137 11.286 15.1529 11.197 15.1504Z"
                            fill="#EDEBEA"
                          />
                        </svg>
                        <p>{constructor.trust_badge}</p>
                      </div>
                      <div className="mb-7 flex gap-2.5 text-lg font-medium">
                        <p>Excellent {constructor.rating.score}</p>
                        <RatingStar
                          className="size-6"
                          rate={constructor.rating.score}
                        />
                        <p className="-ml-2 self-end text-base text-primary">
                          ({constructor.rating.reviews})
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_17898_2087)">
                            <path
                              d="M12 21.862L16.9497 16.9122C19.6834 14.1786 19.6834 9.74644 16.9497 7.01277C14.2161 4.2791 9.78392 4.2791 7.05025 7.01277C4.31658 9.74644 4.31658 14.1786 7.05025 16.9122L12 21.862ZM12 24.6904L5.63604 18.3265C2.12132 14.8117 2.12132 9.11328 5.63604 5.59856C9.15076 2.08384 14.8492 2.08384 18.364 5.59856C21.8787 9.11328 21.8787 14.8117 18.364 18.3265L12 24.6904ZM12 13.9625C13.1046 13.9625 14 13.0671 14 11.9625C14 10.858 13.1046 9.96252 12 9.96252C10.8954 9.96252 10 10.858 10 11.9625C10 13.0671 10.8954 13.9625 12 13.9625ZM12 15.9625C9.79086 15.9625 8 14.1716 8 11.9625C8 9.75338 9.79086 7.96252 12 7.96252C14.2091 7.96252 16 9.75338 16 11.9625C16 14.1716 14.2091 15.9625 12 15.9625Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17898_2087">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.962524)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>{constructor.services[0]}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M12 22.9625C6.47715 22.9625 2 18.4853 2 12.9625C2 7.43967 6.47715 2.96252 12 2.96252C17.5228 2.96252 22 7.43967 22 12.9625C22 18.4853 17.5228 22.9625 12 22.9625ZM12 20.9625C16.4183 20.9625 20 17.3808 20 12.9625C20 8.54424 16.4183 4.96252 12 4.96252C7.58172 4.96252 4 8.54424 4 12.9625C4 17.3808 7.58172 20.9625 12 20.9625ZM13 12.9625H17V14.9625H11V7.96252H13V12.9625Z"
                            fill="black"
                          />
                        </svg>
                        <p>{constructor.services[1]}</p>
                      </div>
                      <div className="flex items-center gap-8">
                        <Link
                          to="/constructor"
                          className="h-full flex-1 flex-shrink-0 rounded-full border border-primary py-3 text-center font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                        >
                          View Profile
                        </Link>
                        <div
                          className="flex-1"
                          onClick={() => handleRemove(constructor.id)}
                        >
                          <Button type="button" className="w-full">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <Button className="mb-10">
              <Link to="/safety-guideline">Continue</Link>
            </Button>
            <p className="mb-6 text-4xl font-bold">Other Profile</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-6">
        {constructors.map((constructor, idx) => (
          <div key={idx} className="card rounded-lg border border-accent p-5">
            <div className="mb-6 flex items-center gap-2.5 rounded bg-[#FFF2EB] px-4 py-2.5 text-left">
              <figure className="size-14 overflow-hidden rounded-full">
                <img
                  src={profile}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </figure>
              <div className="">
                <p className="text-xl text-primary">{constructor.name}</p>
                <p className="text-sm text-[#637381]">
                  {constructor.profession}
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M24 12.9625C24 13.9871 22.7446 14.8087 22.4862 15.7779C22.2277 16.7471 22.8923 18.1133 22.3938 18.9625C21.8954 19.8118 20.3815 19.9318 19.68 20.6425C18.9785 21.3533 18.8677 22.8579 18 23.3564C17.1323 23.8548 15.7846 23.1902 14.8154 23.4487C13.8462 23.7071 13.0246 24.9625 12 24.9625C10.9754 24.9625 10.1538 23.7071 9.23077 23.4487C8.30769 23.1902 6.89538 23.8548 6.04615 23.3564C5.19692 22.8579 5.07692 21.3441 4.36615 20.6425C3.65538 19.941 2.15077 19.8302 1.65231 18.9625C1.15385 18.0948 1.81846 16.7471 1.56 15.7779C1.30154 14.8087 0 13.9871 0 12.9625C0 11.9379 1.25538 11.1164 1.51385 10.1933C1.77231 9.27022 1.10769 7.85791 1.60615 7.00868C2.10462 6.15945 3.61846 5.99329 4.32 5.28252C5.02154 4.57176 5.13231 3.06714 6 2.56868C6.86769 2.07022 8.21538 2.73483 9.18462 2.47637C10.1538 2.21791 10.9754 0.962524 12 0.962524C13.0246 0.962524 13.8462 2.21791 14.8154 2.47637C15.7846 2.73483 17.1508 2.07022 18 2.56868C18.8492 3.06714 18.9692 4.58099 19.68 5.28252C20.3908 5.98406 21.8954 6.09483 22.3938 6.96252C22.8923 7.83022 22.2277 9.17791 22.4862 10.1471C22.7446 11.1164 24 11.9379 24 12.9625Z"
                    fill="#109138"
                  />
                  <path
                    d="M12.0005 20.8087C16.3338 20.8087 19.8466 17.2958 19.8466 12.9625C19.8466 8.62921 16.3338 5.11636 12.0005 5.11636C7.66714 5.11636 4.1543 8.62921 4.1543 12.9625C4.1543 17.2958 7.66714 20.8087 12.0005 20.8087Z"
                    fill="#20BF55"
                  />
                  <path
                    d="M11.197 15.1504C11.106 15.1508 11.0159 15.133 10.9319 15.0982C10.8478 15.0633 10.7716 15.012 10.7077 14.9473L8.55696 12.8334C8.42731 12.7036 8.35449 12.5277 8.35449 12.3442C8.35449 12.1607 8.42731 11.9848 8.55696 11.855C8.68677 11.7253 8.86273 11.6525 9.04619 11.6525C9.22965 11.6525 9.40561 11.7253 9.53542 11.855L11.197 13.4981L14.4647 10.2765C14.5956 10.1468 14.7728 10.0744 14.9571 10.0752C15.1415 10.0761 15.318 10.1502 15.4477 10.2811C15.5775 10.4121 15.6499 10.5893 15.649 10.7736C15.6482 10.958 15.5741 11.1345 15.4431 11.2642L11.677 14.9565C11.6146 15.0202 11.5398 15.0702 11.4572 15.1036C11.3746 15.137 11.286 15.1529 11.197 15.1504Z"
                    fill="#EDEBEA"
                  />
                </svg>
                <p>{constructor.trust_badge}</p>
              </div>
              <div className="mb-7 flex gap-2.5 text-lg font-medium">
                <p>Excellent {constructor.rating.score}</p>
                <RatingStar
                  className="size-6"
                  rate={constructor.rating.score}
                />
                <p className="-ml-2 self-end text-base text-primary">
                  ({constructor.rating.reviews})
                </p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_17898_2087)">
                    <path
                      d="M12 21.862L16.9497 16.9122C19.6834 14.1786 19.6834 9.74644 16.9497 7.01277C14.2161 4.2791 9.78392 4.2791 7.05025 7.01277C4.31658 9.74644 4.31658 14.1786 7.05025 16.9122L12 21.862ZM12 24.6904L5.63604 18.3265C2.12132 14.8117 2.12132 9.11328 5.63604 5.59856C9.15076 2.08384 14.8492 2.08384 18.364 5.59856C21.8787 9.11328 21.8787 14.8117 18.364 18.3265L12 24.6904ZM12 13.9625C13.1046 13.9625 14 13.0671 14 11.9625C14 10.858 13.1046 9.96252 12 9.96252C10.8954 9.96252 10 10.858 10 11.9625C10 13.0671 10.8954 13.9625 12 13.9625ZM12 15.9625C9.79086 15.9625 8 14.1716 8 11.9625C8 9.75338 9.79086 7.96252 12 7.96252C14.2091 7.96252 16 9.75338 16 11.9625C16 14.1716 14.2091 15.9625 12 15.9625Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17898_2087)">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.962524)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p>{constructor.services[0]}</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 22.9625C6.47715 22.9625 2 18.4853 2 12.9625C2 7.43967 6.47715 2.96252 12 2.96252C17.5228 2.96252 22 7.43967 22 12.9625C22 18.4853 17.5228 22.9625 12 22.9625ZM12 20.9625C16.4183 20.9625 20 17.3808 20 12.9625C20 8.54424 16.4183 4.96252 12 4.96252C7.58172 4.96252 4 8.54424 4 12.9625C4 17.3808 7.58172 20.9625 12 20.9625ZM13 12.9625H17V14.9625H11V7.96252H13V12.9625Z"
                    fill="black"
                  />
                </svg>
                <p>{constructor.services[1]}</p>
              </div>
              <div className="flex items-center gap-8">
                <Link
                  to="/constructor"
                  className="h-full flex-1 flex-shrink-0 rounded-full border border-primary py-3 text-center font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  View Profile
                </Link>
                <div
                  className="flex-1"
                  onClick={() => handleConnect(constructor.id)}
                >
                  <Button type="button" className="w-full">
                    Connect Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/safety-guideline">Go</Link>
    </div>
  );
};

export default Pros;
