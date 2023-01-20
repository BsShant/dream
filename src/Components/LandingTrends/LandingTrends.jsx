import React from "react";
import "./styles.scss";
const LandingTrends = () => {
  const trendsData = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/24a0/3fa3/4d2738a197ad241bc616d0261dd38c94?Expires=1670198400&Signature=ApzO1quByQSUuMIoMIhkCmhWNZUhXLyPi7VS12RxhFUWwKDPM-EaEzHTiL7AAsuVrJIrF2otFxJzk7htk45ldM0mEpWvH1YC9Sag2NVUKfPf6HKKDmjcNi6nYQy7Zav-jXRuJr-1UoUf-HuUQtoogKw7PbytTT5woiJ1TDx8NBKnK-HV4hgbW0de0RpzYvetGyqKxuSkil51-UathfLvSE77SLUBA4VzZgFoM8er6fy0yiO2rElT3USR60D6X12MhM4zk2pAuGuJUYLzBGxbACUfaTNgTdA9pBh~oiHEovRzj1RqoFfl1e2lzUjhBq~Y1Dg~yLN0Jbqjiu7ydkll8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      title: "Pearson PTE Test vs IELTS",
      detail: " Lorem ipsum dolor sit amet consectetur adipiscing elit dolor",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/efaa/0d34/cb5dd479ab99e91e274f80dcb7a0ac3a?Expires=1670198400&Signature=hEwHyPOcxTcYuDV-ZmOVzcCPVjYMjyG2FQHVR~m5dkhMVvA5iAPExQ0-dD-qny2Jvx4-LWooIaMmhiEQ6hG4Eq1b-WmQfFGzArwyNKZ6ZKriRBagbnCcHSqY5GAFhUpWITJUN9k2OxXqyp07UJtXtGTZBRTvOzkCW7AJqgtbHrY3DAGmv71Z5FtAp-CGP~AU89xy-q5y-6WYHUB7nWcMXw0cn2kPMfGKve-vZraTOqnw5lgaqscaMfN4jWsp0Ip0noMNWql5f0S7gz2YZQDIbN3hvdq18hQW2~MAgi2uVf8t448Hhj5f8j4W42mnwvRrXipABE4kzI5gNPRc3Axxvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      title: "Pearson PTE Test vs IELTS",
      detail: " Lorem ipsum dolor sit amet consectetur adipiscing elit dolor",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/8080/7dc5/954226d182010cea6ab143034b79a3be?Expires=1670198400&Signature=Ma1fuDcxE1eR4gc3NqtupEmyoTHPRhIehdS99gRG9UD25QicMwHX2HvpZxv6gdb2Cbc7zYapEXVz-fX9YyJuoc-MdpJO-wOHPvrMMz9cLrpq-4-Cnmvn7yPGl9UYsBLUmz3Vwe~G5CwuZDrvaGUBF2sWbMnibsUgtWP9rulZB2k9n1OMXPmZBjbEeDdMe52BY-b73foyF~~GHJ5NXdd6w0aqVFiaxVRMP8tMzEymHrGWcYoL-M6NzgEJmRHaurXOEfI4WeF6icOoHS7AJ5UihyHaURdAr43pda3K1hlZ582gJ-8tAIiHADyZYefGfPJZRLZeHpkloOT0oyJmv5AZtw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      title: "Pearson PTE Test vs IELTS",
      detail: " Lorem ipsum dolor sit amet consectetur adipiscing elit dolor",
    },
  ];
  return (
    <div className="landing-trends-container">
      <div className="container">
        <h2 className=" section-header landing-trends-header">
          KEEP UP WITH THE TRENDS
        </h2>
        <div className=" secion-subheader landing-trends-sub-header">
          Popular topics to learn now
        </div>
        <div className="landing-trends-body" data-aos="fade-up">
          {trendsData.map((td, index) => {
            return (
              <div className="landing-trend-box">
                <div className="landing-trend-image">
                  <img src={td.image} alt="" />
                </div>
                <div className="landing-trend-info">
                  <div className="roboto-normal trend-box-header">
                    {td.title}
                  </div>
                  <div className="roboto-normal trend-box-detail">
                    {td.detail}
                  </div>
                  <div className="roboto-light trend-box-link">Read More</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingTrends;
