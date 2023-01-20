import React from "react";
import "./styles.scss";
const LandingBlog = () => {
  const blogData = [
    {
      image:
        "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: " PTE goes widespread in world",
      detail: `  New York, the largest city in the U.S., is an architectural
            marvel with plenty of historic monuments, magnificent
            buildings and countless dazzling skyscrapers.`,
    },
    {
      image:
        "https://images.unsplash.com/photo-1503442862980-50ccb3f1d085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1100&q=80",
      title: " PTE goes widespread in world",
      detail: `  New York, the largest city in the U.S., is an architectural
              marvel with plenty of historic monuments, magnificent
              buildings and countless dazzling skyscrapers.`,
    },
    {
      image:
        "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: " PTE goes widespread in world",
      detail: `  New York, the largest city in the U.S., is an architectural
              marvel with plenty of historic monuments, magnificent
              buildings and countless dazzling skyscrapers.`,
    },
  ];
  return (
    <div className="landing-blog-container">
      <div className="container">
        <h2 className="section-header landing-blog-header">Our Blog</h2>
        <div className="secion-subheader  landing-blog-sub-header">
          Browse through our blogs
        </div>
        <div className="row landing-blog-body">
          {blogData.map((bd, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <div className="blog-box">
                  <div className="blog-image">
                    <img src={bd.image} alt="" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-top">
                      <h3 className="roboto-bold blog-title">{bd.title}</h3>
                      <div className="roboto-light blog-detail">
                        {bd.detail}
                      </div>
                    </div>
                    <div className="roboto-light blog-bottom">
                      <div className="author-box">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/3/34/Angelina_Jolie_%2848462859552%29_%28cropped%29.jpg"
                          alt=""
                        />
                      </div>
                      <div className="blog-date">14th may 2022</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingBlog;
