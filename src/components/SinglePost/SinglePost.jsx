import React from "react";
import circleImg from "../../images/circle-img.png";

export function SinglePost(props) {
  return (
    <>
      {/* Header */}
      <div className="bg-[#111827] w-full md:h-[473px] pt-10 md:pt-28 text-white">
        <div className="px-5 md:px-10 md:w-[655px] h-[173px] relative">
          <img
            src={circleImg}
            alt="circle"
            className="absolute top-0 left-[40px]"
          />
          <h1 className="font-extrabold text-2xl md:text-6xl uppercase pt-3 md:w-[655px] md:h-[90px] tracking-wider">
            Single Post
          </h1>
          <p className="text-sm md:text-lg md:h-[52px] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      {/* Featured Image, Tittle & Excerpt */}
      <div className="p-5 md:p-0  md:px-8 md:absolute top-[500px]">
        <div className="md:pt-20 md:px-20 flex flex-col md:flex-row md:space-x-5 md:h-[406px] bg-white">
          {/* Left Image/Box */}
          <div className="md:w-[457px] md:h-[325px] bg-[#C4C4C4] hover:bg-amber-400">
            <img
              src="https://images.unsplash.com/photo-1632120377007-c2adc3017b1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGludGVyaW9yJTIwVElQUyUyMENIT0lDRSUyMEJFU1QlMjBBR0VOQ1klMjBGb3IlMjBIb3VzZSUyMERlY29yYXRpb258ZW58MHx8MHx8fDA%3D"
              className="md:w-[457px] md:h-[325px] transition hover:scale-110 cursor-pointer"
              alt=""
              srcset=""
            />
          </div>

          {/* Right Content */}
          <div className="md:w-[645px]">
            {/* Heading */}
            <div className="md:h-[136px]">
              <h1 className="font-extrabold text-2xl md:text-5xl uppercase text-[#1B1717] md:h-[136px] leading-10 md:leading-[70px]">
                TIPS CHOICE BEST AGENCY For House Decoration
              </h1>
            </div>

            {/* Description */}
            <div className="md:w-[635px] md:h-[171px] mt-2">
              <p className="text-sm md:text-lg text-[#6E6E6E] font-medium">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p className="text-sm md:text-lg text-[#6E6E6E] pt-3 font-medium">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </div>
      </div>
      //Testimonial
      {/* Blog Content */}
      <div className="md:h-[480px] px-5 mt-5 md:px-28 md:mt-[350px]">
        <p className="text-sm md:text-lg text-[#6E6E6E] font-medium">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
          <br />
          <br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
          <br />
          <br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          <br />
          <br />
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
          <br />
          <br />
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
          <br />
          <br />
          No one rejects, dislikes, or avoids pleasure itself, because it is
          pleasure, but because those who do not know how to pursue pleasure
          rationally encounter consequences that are extremely painful.
          <br />
          <br />
          Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain, but because occasionally
          circumstances occur in which toil and pain can procure him some great
          pleasure.
        </p>
      </div>
    </>
  );
}
