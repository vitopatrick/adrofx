import React from "react";

type Props = {};

let reviews = [
  {
    name: "Jane Clarkson",
    review:
      "I recently had the pleasure of trading with Adrofx, and I must say it has been an exceptional experience from start to finish. As someone who has been involved in trading for several years, I value reliability, transparency, and efficient service, and Adrofx delivered on all fronts.",
  },
  {
    name: "Gray Fisher",
    review:
      "From the moment I signed up on their platform, I was impressed by the user-friendly interface. Navigating through the various trading options was intuitive, making it easy for both beginners and experienced traders to get started. The platform also offers a plethora of educational resources, which I found immensely helpful in staying updated on market trends and making informed decisions.",
  },
  {
    name: "Singer",
    review:
      "One of the standout features of Adrofx is their customer support. The support team is not only knowledgeable but also prompt in addressing any queries or concerns. I appreciated the quick response times and the willingness of the support staff to go the extra mile to ensure customer satisfaction.",
  },
  {
    name: "Jordan",
    review:
      "Furthermore, the range of tradable assets is impressive, providing ample opportunities for diversification. Whether you're interested in stocks, cryptocurrencies, or forex, Adrofx has a diverse portfolio to cater to various trading preferences.",
  },
];

const Reviews = (props: Props) => {
  return (
    <div>
      {/* container */}
      <section className="w-[95%] mx-auto p-4">
        <h4 className="text-center py-3  text-2xl  md:text-3xl font-headerTwo ">
          What they say about Us...
        </h4>
        {/* actual reviews */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {reviews.map((review) => (
            <div className="p-2 rounded-md bg-slate-50">
              <p className="font-body font-light">
                {review.review.substr(0, 84)}....
              </p>
              <h2 className="font-body font-normal py-3 underline ">
                {review.name}
              </h2>
              <div className="w-[30%]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trustpilot_Logo_%282022%29.svg/2560px-Trustpilot_Logo_%282022%29.svg.png"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
