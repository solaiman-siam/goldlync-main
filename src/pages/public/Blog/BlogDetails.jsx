import { Facebook, Linkedin, Twitter } from "@/assets/icons";
import SectionTitle from "@/components/SectionTitle";
import React, { useState } from "react";
import { Link } from "react-router";
import Article from "./Article";

const BlogDetails = () => {
  const [articleNum, setArticleNum] = useState(null);

  const blog = [
    {
      section: 1,
      heading: "Exploring Generative AI in Content Creation",
      content:
        "The rise of generative AI has revolutionized the way content is created, making it faster and more accessible. With tools like ChatGPT, writers can generate ideas, draft articles, and refine their writing more efficiently than ever before. However, while AI can assist in content creation, it’s important to use it effectively to maintain originality, engagement, and value for readers.\n\n In this article, we’ll explore how to harness AI’s capabilities while avoiding common pitfalls, ensuring content remains high-quality, and understanding how AI can be a powerful tool rather than a replacement for human creativity.AI-powered writing tools like ChatGPT can generate impressive content quickly, but they are not without flaws. One of the most common pitfalls is a lack of originality, as AI models are trained on existing data and may produce generic or repetitive responses. Another issue is coherence—while AI can generate grammatically correct sentences, it sometimes struggles with logical flow.",
    },
    {
      section: 2,
      heading: "Steering Clear of Common AI Writing Pitfalls",
      content:
        "AI-powered writing tools like ChatGPT can generate impressive content quickly, but they are not without flaws. One of the most common pitfalls is a lack of originality, as AI models are trained on existing data and may produce generic or repetitive responses. Another issue is coherence—while AI can generate grammatically correct sentences, it sometimes struggles with logical flow, leading to disjointed or redundant ideas.\n\nTo overcome these challenges, content creators must actively review and refine AI-generated content. Editing for clarity, reordering sections for better structure, and injecting a unique voice into the text are essential steps. Additionally, fact-checking AI outputs is crucial, as AI models can sometimes generate misinformation. By combining AI efficiency with human oversight, writers can ensure that their content remains accurate, engaging, and valuable to their audience.",
    },
    {
      section: 3,
      heading: "ChatGPT Capabilities - Define Your Style",
      content:
        "One of the key benefits of using AI for content creation is the ability to tailor it to match a specific writing style. ChatGPT can be adjusted to produce different tones—formal, conversational, persuasive, or technical—depending on the needs of the content. However, defining your unique style requires more than just selecting a tone; it involves fine-tuning AI-generated content to reflect your voice and brand identity.\n\nWriters can achieve this by experimenting with different prompts and refining responses through iterative improvements. Providing clear instructions, specifying tone preferences, and using structured outlines can guide AI to generate more aligned content. Additionally, integrating personal anecdotes, expert insights, and storytelling techniques enhances authenticity, ensuring that AI-assisted writing doesn’t feel robotic or impersonal. The key to successful AI-powered content is not just automation but intentional curation and customization.",
    },
    {
      section: 4,
      heading: "Understand Your Readers",
      content:
        "Creating compelling content requires a deep understanding of the target audience. AI tools can assist by analyzing reader engagement patterns, identifying trending topics, and even suggesting optimized keywords. However, the human element remains irreplaceable in truly connecting with an audience.\n\nWriters must consider audience demographics, interests, and pain points when crafting AI-generated content. Personalization plays a significant role—understanding what resonates with readers and tailoring the message accordingly can make content more impactful. Additionally, maintaining a conversational tone and addressing audience concerns directly helps establish trust and credibility.\n\nAI-generated content can serve as a strong foundation, but fine-tuning it based on audience insights is what transforms it into a powerful communication tool. By balancing AI-generated efficiency with human intuition, writers can produce content that is not only informative but also engaging and relatable.",
    },
    {
      section: 5,
      heading: "Creating Quality AI-powered Blogs that Stand Out",
      content:
        "With the vast amount of content being published online daily, standing out requires more than just well-written text. AI-powered blogs can be a game-changer when used strategically, offering efficiency in research, structuring, and optimization. However, quality content creation goes beyond AI-generated text—it demands originality, depth, and emotional engagement.\n\nTo make an AI-powered blog stand out, writers should focus on value-driven content. This means providing fresh insights, unique perspectives, and well-researched information that adds substance to the topic. AI can assist in gathering data and summarizing key points, but human creativity is essential for adding depth and storytelling elements.\n\nMoreover, formatting plays a crucial role in readability. Using subheadings, bullet points, and visuals enhances the reader’s experience, making content more digestible. Combining AI automation with human creativity allows bloggers to streamline their writing process while maintaining authenticity and quality.",
    },
    {
      section: 6,
      heading: "Conclusion: Embracing AI in Blog Creation",
      content:
        "The integration of AI in content creation marks a transformative shift in how blogs and articles are produced. AI tools like ChatGPT have made writing more efficient, enabling content creators to generate ideas, structure information, and refine text faster than ever before. However, AI is not a replacement for human creativity; rather, it is a collaborative tool that enhances productivity.\n\nEmbracing AI in blog creation requires a balanced approach. While AI can help with research and automation, the final content should always reflect the writer’s expertise and personal touch. Editing AI-generated drafts to ensure logical flow, emotional engagement, and factual accuracy is essential.\n\nWriters who leverage AI effectively can create high-quality content at scale without compromising originality. By understanding AI’s strengths and limitations, content creators can harness its potential while maintaining the authenticity that resonates with readers.",
    },
    {
      section: 7,
      heading: "Afterword: The AI Behind This Article",
      content:
        "This article itself is an example of how AI and human input can work together to produce high-quality content. While AI assisted in structuring ideas, generating draft content, and ensuring coherence, human oversight was responsible for refining the tone, ensuring logical flow, and adding unique insights.\n\nThe process of AI-assisted writing involves multiple iterations—starting with an AI-generated draft, followed by human editing and personalization. This ensures that while AI contributes efficiency and data-driven insights, the final product retains authenticity and emotional depth.\n\nAs AI continues to evolve, it will play an even greater role in content creation. However, the key takeaway remains the same: AI is a tool, not a replacement for human creativity. By working in synergy with AI, writers can unlock new possibilities in content creation while preserving the qualities that make writing truly engaging and meaningful.",
    },
  ];

  return (
    <section className="container mx-auto mb-[80px] mt-10">
      <div className="grid grid-cols-3 gap-9">
        <div className="left col-span-2">
          <div className="relative overflow-hidden rounded-xl bg-black pb-20">
            <figure className="h-[480px] w-full overflow-hidden rounded-xl">
              <img
                src="https://i.ibb.co.com/SwGP2zzV/image-4.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </figure>
            <div className="absolute bottom-0 left-0 space-y-3 bg-black/10 p-6 text-white backdrop-blur-[21.59px]">
              <div className="flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1">
                <div className="h-4 w-4 rounded-full bg-primary"></div>
                <h4 className="text-primary">Artificial Intelligence</h4>
              </div>
              <h3 className="text-2xl font-bold">
                Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS
                Marketing Managers
              </h3>
              <div className="flex items-center gap-2 pb-3 text-white">
                <p>Oct 19</p>
                <div className="size-2 rounded-full bg-white"></div>
                <p>10 min read</p>
              </div>
            </div>
          </div>
          <div className="content text-[#1B1B1F]">
            {blog.map((article) => (
              <Article
                article={article}
                key={article.section}
                setArticleNum={setArticleNum}
              />
              //   <div
              //     key={article.section}
              //     id={article.section}
              //     className="w-[95%]"
              //   >
              //     <h5 className="mb-6 pt-9 text-3xl font-bold">
              //       {article.heading}
              //     </h5>
              //     <p className="text-xl font-light">{article.content}</p>
              //   </div>
            ))}
          </div>
        </div>
        <div className="right h-full">
          <div className="flex h-[560px] flex-col gap-9 text-white">
            <div className="w-full flex-grow rounded-xl bg-primary p-6">
              <figure className="mb-6 size-[110px] overflow-hidden rounded-xl">
                <img
                  src="https://i.ibb.co.com/V7XRPhM/image-6-1.png"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </figure>
              <h5 className="text-2xl font-bold">Tamás Hám-Szabó</h5>
              <p className="mb-6 border-b py-3">
                Founder of SAAS First - the Best AI and Data-Driven Customer
                Engagement Tool
              </p>
              <p>
                With 11 years in SaaS, I&apos;ve built MillionVerifier and SAAS
                First. Passionate about SaaS, data, and AI. Let&apos;s connect
                if you share the same drive for success!
              </p>
            </div>
            <div className="w-full rounded-xl bg-primary p-6">
              <h5 className="mb-3 text-xl font-bold">
                Share with your community!
              </h5>
              <div className="flex gap-6">
                <Facebook />
                <Twitter />
                <Linkedin />
              </div>
            </div>
          </div>
          <div className="sticky top-10">
            <h5 className="mb-6 mt-9 text-2xl font-bold">In this article</h5>
            <div className="">
              {blog.map((article) => (
                <div key={article.section} className="w-[95%]">
                  <Link
                    to={`#${article.section}`}
                    className={`block border-l-4 py-3 pl-6 text-xl ${articleNum === article.section ? "border-primary font-bold text-primary" : "border-transparent"}`}
                    onClick={() => setArticleNum(article.section)}
                  >
                    {article.heading}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h4 className="mt-20 mb-9 text-3xl font-bold">Related Articles</h4>
        <div className="grid grid-cols-3 gap-x-6 gap-y-9">
          {Array(6)
            .fill(null)
            .map((_, idx) => (
              <Link
                to="/blog-details"
                className="card rounded-lg border p-3"
                key={idx}
              >
                <figure className="h-[220px] w-full overflow-hidden rounded-lg">
                  <img
                    src="https://i.ibb.co.com/J83jd1f/image-8.png"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </figure>
                <div className="flex items-center gap-3 py-4">
                  <div className="h-5 w-5 rounded-full bg-primary"></div>
                  <h4 className="text-lg text-primary">
                    Artificial Intelligence
                  </h4>
                </div>
                <p className="mb-3 text-xl font-medium text-[#1B1B1F]">
                  How to Write Articles with AI? Include Your Unique Perspective
                </p>
                <div className="flex items-center gap-2 text-[#1B1B1F]">
                  <p>Oct 19</p>
                  <div className="size-2 rounded-full bg-black"></div>
                  <p>10 min read</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
