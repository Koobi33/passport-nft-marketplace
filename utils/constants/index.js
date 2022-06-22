import FacebookStampIcon from "../../public/icons/facebookStampIcon.svg";
import GoogleStampIcon from "../../public/icons/googleStampIcon.svg";
import TwitterStampIcon from "../../public/icons/twitterStampIcon.svg";
import GithubStampIcon from "../../public/icons/githubStampIcon.svg";
import BrightIDStampIcon from "../../public/icons/brightidStampIcon.svg";
import POAPStampIcon from "../../public/icons/poapStampIcon.svg";
import ENSStampIcon from "../../public/icons/ensStampIcon.svg";
import POHStampIcon from "../../public/icons/pohStampIcon.svg";

export const ICONS = {
  Facebook: FacebookStampIcon,
  Google: GoogleStampIcon,
  Twitter: TwitterStampIcon,
  Github: GithubStampIcon,
  BrightID: BrightIDStampIcon,
  POAP: POAPStampIcon,
  ENS: ENSStampIcon,
  "Proof of Humanity": POAPStampIcon,
};

const FacebookStamp = {
  id: 0,
  title: "Facebook",
  icon: <FacebookStampIcon />,
};
const GoogleStamp = {
  id: 1,
  title: "Google",
  icon: <GoogleStampIcon />,
};
const TwitterStamp = {
  id: 2,
  title: "Twitter",
  icon: <TwitterStampIcon />,
};
const GithubStamp = {
  id: 3,
  title: "Github",
  icon: <GithubStampIcon />,
};
const BrightIDStamp = {
  id: 4,
  title: "BrightID",
  icon: <BrightIDStampIcon />,
};
const POAPStamp = {
  id: 5,
  title: "POAP",
  icon: <POAPStampIcon />,
};
const ENSStamp = {
  id: 6,
  title: "ENS",
  icon: <ENSStampIcon />,
};
const POHStamp = {
  id: 7,
  title: "Proof of Humanity",
  icon: <POHStampIcon />,
};

export const stamps = [
  FacebookStamp,
  GoogleStamp,
  TwitterStamp,
  GithubStamp,
  BrightIDStamp,
  POAPStamp,
  ENSStamp,
  POHStamp,
];

export const STEP_ONE = 1;
export const STEP_TWO = 2;

export const CREATE_ENTITY = "CREATE_ENTITY";
export const GET_COLLECTIONS_LIST = "GET_COLLECTIONS_LIST";
export const GET_COLLECTION = "GET_COLLECTION";
export const PARTICIPATE = "PARTICIPATE";
export const CUSTOM = "CUSTOM";
export const DEFAULT = "DEFAULT";

export const DEFAULT_CHECKS = [GithubStamp];

export const API_ADDRESS = "/api/handle";
