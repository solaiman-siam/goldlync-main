import { Link } from "react-router";
import RatingStar from "@/components/shared/RatingStar";
import { Button } from "@/components/shadcn/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { Service1, Service2, TrustBadge } from "@/assets/icons";
import Container from "@/components/Container";

const Pros = () => {
  const constructors = [
    {
      id: 1,
      name: "Dust Begone",
      logo: "https://i.ibb.co.com/YFBKSwN3/e1d1df-352a1ec7b68040c4a96be96c4a12c6af-mv2-d-3333-3333-s-4-2.jpg",
      profession: "Air Duct Cleaning",
      trust_badge: "Reliable and Trustworthy",
      rating: {
        score: 4.7,
        reviews: 140,
      },
      services: ["Residential & Commercial Cleaning", "Flexible Scheduling"],
    },
    {
      id: 2,
      name: "Green Glow Cleaners",
      logo: "https://i.ibb.co.com/GQD0LvJH/images.jpg",
      profession: "Eco-Friendly Cleaning",
      trust_badge: "Eco-Friendly",
      rating: {
        score: 4.7,
        reviews: 85,
      },
      services: ["Organic Gardening Services", "Landscape Design"],
    },
    {
      id: 3,
      name: "Bubbles Cleaning",
      logo: "https://i.ibb.co.com/DD5L6gw7/Clean-Bubbles-logo-1-q61clus6x66kf9vyupdhbt8jwsg9vmc8ro6q8u7qr0.png",
      profession: "Janitorial Services",
      trust_badge: "Highly Recommended",
      rating: {
        score: 4.7,
        reviews: 150,
      },
      services: ["Expert Plumbing Services", "Quick and Efficient Repairs"],
    },
    {
      id: 4,
      name: "Dust & Shine Crew",
      logo: "https://i.ibb.co.com/wZvC2Z2B/5531-FA70-35-FF-4840-871-B-4-F6-F057-AF202.jpg",
      profession: "Commercial Cleaning",
      trust_badge: "Top Rated",
      rating: {
        score: 4.9,
        reviews: 200,
      },
      services: ["Custom Carpentry Services", "High-Quality Craftsmanship"],
    },
    {
      id: 5,
      name: "Gleaming Spaces",
      logo: "https://i.ibb.co.com/WNmHXKZq/images.png",
      profession: "Official services",
      trust_badge: "Customer Favorite",
      rating: {
        score: 4.8,
        reviews: 110,
      },
      services: ["Interior & Exterior Painting", "Affordable Rates"],
    },
    {
      id: 6,
      name: "Fresh Start LLC",
      logo: "https://i.ibb.co.com/SDmzH6BP/348s.jpg",
      profession: "Consulting",
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
      id: 7,
      name: "Neat & Tidy",
      logo: "https://i.ibb.co.com/20dgQRxv/images.jpg",
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
      name: "Superb Sparkle",
      logo: "https://i.ibb.co.com/PGZtnRf5/download.png",
      profession: "Commercial Janitorial",
      trust_badge: "Licensed and Insured",
      rating: {
        score: 4.8,
        reviews: 95,
      },
      services: ["Heating & Cooling Services", "Energy-Efficient Solutions"],
    },
    {
      id: 9,
      name: "Sparkle Clean",
      profession: "Cleaning Service",
      logo: "https://i.ibb.co.com/VWs3hhVk/images.png",
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
  ];

  const [selectedConstructors, setSelectedConstructors] = useState([]);

  const handleConnect = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (
      selectedConstructors.length === 3 &&
      !selectedConstructors.includes(id)
    ) {
      toast.error("You can select maximum 3 Pros");
      return;
    }
    setSelectedConstructors((prevSelected) => {
      if (!prevSelected.includes(id)) {
        return [...prevSelected, id];
      }
      return prevSelected.filter((constructorId) => constructorId !== id);
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
    <>
      <Container>
        <div className="my-8 md:my-14">
          <div className="mx-auto mb-8 text-center lg:mb-16 lg:w-[60%]">
            <h1 className="mb-4 text-[24px] font-bold md:text-3xl lg:text-5xl">
              Your Trusted Service Experts - Fast, Reliable, and Affordable!
            </h1>
            <p className="text-base lg:text-lg">
              Connect with trusted professionals, set your budget, and bring
              your vision to life—all in one place.
            </p>
          </div>

          <div className="">
            {selectedConstructors.length != 0 && (
              <div>
                <p className="mb-6 text-center text-2xl font-bold md:text-left lg:text-3xl xl:text-4xl">
                  Your Selected Pro&apos;s
                </p>
                <div className="mb-6 grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
                  {constructors
                    .filter((constructor) =>
                      selectedConstructors.includes(constructor.id)
                    )
                    .map((constructor, idx) => (
                      <SelectedConstructor
                        constructor={constructor}
                        idx={idx}
                        key={idx}
                        handleRemove={handleRemove}
                      />
                    ))}
                </div>
                <div className="flex justify-center md:justify-start">
                  <Button className="mb-10">
                    <Link to="/safety-guideline">Continue</Link>
                  </Button>
                </div>
                <p className="mb-6 text-center text-2xl font-bold md:text-left lg:text-3xl xl:text-4xl">
                  Other Profile
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
            {constructors.map((constructor, idx) => (
              <div
                key={idx}
                className="card rounded-lg border border-accent p-5"
              >
                <div className="mb-6 flex items-center gap-2.5 rounded bg-[#FFF2EB] px-4 py-2.5 text-left">
                  <figure className="size-14 overflow-hidden rounded-full">
                    <img
                      src={constructor?.logo}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </figure>
                  <div className="">
                    <p className="text-xl text-primary">{constructor?.name}</p>
                    <p className="text-sm text-[#637381]">
                      {constructor?.profession}
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center gap-2">
                    <TrustBadge />
                    <p>{constructor?.trust_badge}</p>
                  </div>
                  <div className="mb-7 flex gap-2.5 text-lg font-medium">
                    <p>Excellent {constructor?.rating?.score}</p>
                    <div className="flex items-center gap-3">
                      <RatingStar
                        className="size-6"
                        rate={constructor?.rating?.score}
                      />
                      <p className="-ml-2 self-end text-base text-primary">
                        ({constructor?.rating?.reviews})
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Service1 />
                    <p>{constructor?.services[0]}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Service2 />
                    <p>{constructor?.services[1]}</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-8">
                    <Link
                      to="/constructor"
                      className="h-full w-full flex-1 flex-shrink-0 rounded-full border border-primary py-2 text-center font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white lg:py-3"
                    >
                      View Profile
                    </Link>
                    <div
                      className={`w-full flex-1`}
                      onClick={() => handleConnect(constructor.id)}
                    >
                      <Button
                        type="button"
                        className={`w-full ${selectedConstructors.includes(constructor.id) && "bg-[#ff0000]"}`}
                      >
                        {selectedConstructors.includes(constructor.id)
                          ? "Remove"
                          : "Connect Now"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Pros;

const SelectedConstructor = ({ constructor, idx, handleRemove }) => (
  <div key={idx} className="card rounded-lg border border-accent p-5">
    <div className="mb-6 flex items-center gap-2.5 rounded bg-[#FFF2EB] px-4 py-2.5 text-left">
      <figure className="size-14 overflow-hidden rounded-full">
        <img
          src={constructor?.logo}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </figure>
      <div className="">
        <p className="text-xl text-primary">{constructor.name}</p>
        <p className="text-sm text-[#637381]">{constructor.profession}</p>
      </div>
    </div>
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <TrustBadge />
        <p>{constructor.trust_badge}</p>
      </div>
      <div className="mb-7 flex gap-2.5 text-lg font-medium">
        <p>Excellent {constructor.rating.score}</p>
        <RatingStar className="size-6" rate={constructor.rating.score} />
        <p className="-ml-2 self-end text-base text-primary">
          ({constructor.rating.reviews})
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Service1 />
        <p>{constructor.services[0]}</p>
      </div>
      <div className="flex items-center gap-4">
        <Service2 />
        <p>{constructor.services[1]}</p>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to="/constructor"
          className="h-full flex-1 flex-shrink-0 rounded-full border border-primary py-2 text-center font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white lg:py-4"
        >
          View Profile
        </Link>
        <div className="flex-1" onClick={() => handleRemove(constructor.id)}>
          <Button type="button" className="h-fit w-full bg-[#ff0000] !py-2">
            Remove
          </Button>
        </div>
      </div>
    </div>
  </div>
);
