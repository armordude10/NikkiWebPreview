import Image from "next/image";
import teamIcon from "@/assets/img/team/team_icon.png";
import teamBgImage from "@/assets/img/team/team_bg.png";
import teamLeftBgImage from "@/assets/img/team/team_left_bg.png";
import TeamCard from "@/components/shared/cards/TeamCard";
import getTeamMembers from "@/libs/getTeamMembers";
const Team = () => {
  const team = getTeamMembers().slice(8, 12);

  return (
    <div
      className="team sp_bottom_100 sp_top_100 position-relative"
      style={{ background: `url('${teamBgImage.src}')` }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="team__left sp_50">
            <div className="team__left__wrap">
              <div
                className="section__title section__title--2"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="section__title__heading">
                  <h3>TRANSFORMATIONAL LEADERSHIP YOU CAN TRUST.</h3>
                </div>
                <div className="section__title__text">
                  <p>
                    Meet the collaborative network of visionaries, creatives, and changemakers who amplify Nikki&apos;s mission of empowerment and transformation.
                  </p>
                </div>
              </div>
              <div className="team__left__img">
                <Image src={teamLeftBgImage} alt="Team Left BG" />
              </div>
            </div>
          </div>

          <div className="col-xl-8 offset-xl-4 col-lg-7 offset-lg-5  col-md-12 col-sm-12 team__right">
            <div className="row">
              {team?.map((teamSingle, idx) => (
                <TeamCard key={idx} teamSingle={teamSingle} />
              ))}
            </div>
            <div className="team__icon">
              <Image src={teamIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
