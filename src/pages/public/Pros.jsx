import { Link } from "react-router";
import profile from "@/assets/images/constructor.png";
import RatingStar from "@/components/shared/RatingStar";
import { Button } from "@/components/shadcn/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { Service1, Service2, TrustBadge } from "@/assets/icons";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (selectedConstructors.length === 3 && !selectedConstructors.includes(id)) {
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
              <p className="mb-6 text-4xl font-bold">
                Your Selected Pro&apos;s
              </p>
              <div className="mb-6 grid grid-cols-3 gap-x-5 gap-y-6">
                {constructors
                  .filter((constructor) =>
                    selectedConstructors.includes(constructor.id)
                  )
                  .map((constructor, idx) => (
                    <SelectedConstructor constructor={constructor} idx={idx} key={idx} handleRemove={handleRemove}/>
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
                  <TrustBadge/>
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
                  <Service1/>
                  <p>{constructor.services[0]}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Service2/>
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
                    className={`flex-1`}
                    onClick={() => handleConnect(constructor.id)}
                  >
                    <Button type="button" className={`w-full ${selectedConstructors.includes(constructor.id) && "bg-[#ff0000]"}`}>
                      {selectedConstructors.includes(constructor.id) ? "Remove" : "Connect Now"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pros;

const SelectedConstructor = ({constructor,idx,handleRemove}) => (
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
        <Service1/>
        <p>{constructor.services[0]}</p>
      </div>
      <div className="flex items-center gap-4">
        <Service2/>
        <p>{constructor.services[1]}</p>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to="/constructor"
          className="h-full flex-1 flex-shrink-0 rounded-full border border-primary py-2 text-center font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
        >
          View Profile
        </Link>
        <div className="flex-1" onClick={() => handleRemove(constructor.id)}>
          <Button type="button" className="w-full bg-[#ff0000] !py-2 h-fit">
            Remove
          </Button>
        </div>
      </div>
    </div>
  </div>
);
