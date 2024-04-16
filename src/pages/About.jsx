import React from "react";
import Writing from "../components/Writing";
import Member from "../components/Member";
import Reading from "../components/Reading";
const About = () => {
  return (
    <div className=" bg-darkgray text-white flex flex-col md:justify-center">
      <div className="flex flex-col p-8">
        <section className="pr-4 lg:pr-96">
          <div>
            <div>
              <h2 className="pt-16 text-4xl md:text-7xl font-bold mb-8 md:mb-16 mt-8 md:mt-16 font-serif">
                Everyone has a <br />
                story to tell.
              </h2>
            </div>
            <p className="mb-4 text-lg md:text-2xl">
              Medium is a home for human stories and ideas. Here, anyone can
              share insightful perspectives, useful knowledge, and life wisdom
              with the world—without building a mailing list or a following
              first. The internet is noisy and chaotic; Medium is quiet yet full
              of insight. It’s simple, beautiful, collaborative, and helps you
              find the right audience for whatever you have to say.
            </p>
            <br />
            <p className="mb-4 text-lg md:text-2xl">
              We believe that what you read and write matters. Words can divide
              or empower us, inspire or discourage us. In a world where the most
              sensational and surface-level stories often win, we’re building a
              system that rewards depth, nuance, and time well spent. A space
              for thoughtful conversation more than drive-by takes, and
              substance over packaging.
            </p>
            <br />
            <br />
            <blockquote className="text-lg md:text-3xl ">
              <span className=" bg-textBG">
                Ultimately, our goal is to deepen our collective understanding
                of the world through the power of writing.
              </span>
            </blockquote>
            <br />
            <br />
            <p className="mb-4 text-lg md:text-2xl">
              Over 100 million people connect and share their wisdom on Medium
              every month. Many are professional writers, but just as many
              aren’t — they’re CEOs, computer scientists, U.S. presidents,
              amateur novelists, and anyone burning with a story they need to
              get out into the world. They write about what they’re working on,
              what’s keeping them up at night, what they’ve lived through, and
              what they’ve learned that the rest of us might want to know too.
            </p>
            <br />
            <p className="mb-4 text-lg md:text-2xl">
              Instead of selling ads or selling your data, we’re supported by a
              growing community of{" "}
              <a href="/membership" className=" underline">
                Medium members
              </a>{" "}
              who align with our mission. If you’re new here,{" "}
              <a href="/" className="underline">
                start exploring
              </a>
              . Dive deeper into whatever matters to you. Find a post that helps
              you learn something new, or reconsider something familiar—and then{" "}
              <a href="https://medium.com/new-story" className="underline">
                share your own story
              </a>
              .
            </p>
          </div>
        </section>
      </div>
      <div className="mt-40">
        <hr />
        <div className=" hover:bg-white hover:text-black p-6 transition-colors duration-600 ease-in-out ">
          <Reading />
        </div>
        <hr />
        <div className=" hover:bg-white hover:text-black p-6 transition-colors duration-700 ease-in-out ">
          <Writing />
        </div>

        <hr />
        <div className=" hover:bg-white hover:text-black p-6 transition-colors duration-700 ease-in-out ">
          <Member />
        </div>
      </div>
    </div>
  );
};

export default About;
