import BrandArea from "@/src/common/brand-area";
import CounterArea from "@/src/common/counter-area";
import InstructorArea from "@/src/common/instructor-area";
import SuitableArea from "@/src/common/suitable-area";
import React from "react";
// import AboutArea from "./about-area";
import AboutArea from "../../../common/about-area";
import BlogArea from "./blog-area";
import CategoryArea from "./category-area";
import ChooseArea from "../../../common/choose-area";
import CourseAreaReal from "./course-area";
import HeroSlider from "./hero-slider";
import TestimonialAreaTwo from "./testimonial-area-2";
import VideoArea from "../../../common/video-area";
import Header from "@/src/layout/headers/header";
import FeatureArea from "../home/feature-area";
import CourseArea from "../home/course-area";
import OurCourse from "../home-3/our-course";
import TestimonialArea from "../home/testimonial-area";

const HomeTwo = () => {
  return (
    <>
      {/* <Header /> */}
      <HeroSlider />
      <FeatureArea />
      <AboutArea />
      <CategoryArea />
      {/* <CourseArea /> */}
      <OurCourse/>
      <VideoArea />
      <CounterArea style_counter={true} />
      <CourseAreaReal />
      <ChooseArea style_2={true} />
      <InstructorArea style_2={true} />
      {/* <TestimonialAreaTwo /> */}
      <TestimonialArea />
      <SuitableArea style_2={true} />
      <BlogArea />
      <BrandArea style_2={true} />
    </>
  );
};

export default HomeTwo;
