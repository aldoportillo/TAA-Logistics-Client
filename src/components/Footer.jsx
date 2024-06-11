import styled from "styled-components";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="row">
      <div className="social-medias">
  <a
    className="icon-wrapper"
    href="https://twitter.com/taalogistics"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow TAA Logistics on Twitter"
  >
    <FaTwitter />
  </a>
  <a
    className="icon-wrapper"
    href="https://www.instagram.com/taalogisticsinc/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow TAA Logistics on Instagram"
  >
    <FaInstagram />
  </a>
  <a
    className="icon-wrapper"
    href="https://www.facebook.com/TAA.Logistics.Inc"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow TAA Logistics on Facebook"
  >
    <FaFacebook />
  </a>
  <a
    className="icon-wrapper"
    href="https://www.linkedin.com/company/taa-logistics-inc"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Connect with TAA Logistics on LinkedIn"
  >
    <FaLinkedin />
  </a>
  <a
    className="icon-wrapper"
    href="https://www.youtube.com/@TAALogisticsInc"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Subscribe to TAA Logistics on YouTube"
  >
    <FaYoutube />
  </a>
  <a
    className="icon-wrapper"
    href="https://www.tiktok.com/@taalogistics"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Follow TAA Logistics on TikTok"
  >
    <FaTiktok />
  </a>
</div>

        <a
          href="https://www.google.com/search?q=taa+logistics+inc+reviews&client=firefox-b-1-d&sca_esv=564462317&ei=UYj_ZJOIJ5qbptQPsbe5uAg&ved=0ahUKEwjT9L7uwaOBAxWajYkEHbFbDocQ4dUDCBA&uact=5&oq=taa+logistics+inc+reviews&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXRhYSBsb2dpc3RpY3MgaW5jIHJldmlld3MyBRAAGKIESMQfULYJWKQccAF4AJABAJgBaaABnQWqAQM3LjG4AQPIAQD4AQHCAhAQLhgTGIAEGMcBGK8BGLADwgIJEAAYHhgTGLADwgIGEAAYFhgewgIFECEYoAHCAggQIRgWGB4YHeIDBBgBIEGIBgGQBgI&sclient=gws-wiz-serp#lrd=0x880e39fde452c845:0xa2a97699181a894d,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leave us a Review
        </a>
      </div>
      <div className="row">
        <a
          href="https://www.eia.gov/petroleum/gasdiesel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Current EIA Gas Prices
        </a>

        <p>©{getCurrentYear()} TAA Logistics, INC.</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: var(--accent-white);
  padding: 20px 30px;

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }

  .social-medias {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .icon-wrapper {
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  svg {
    color: var(--accent-white);
    height: 20px;
    width: 20px;
  }
`;

export default Footer;
