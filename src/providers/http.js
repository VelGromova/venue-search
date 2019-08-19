import axios from 'axios';

const CLIENT_ID = process.env.FOURSQUARE.CLIENT_ID;
const CLIENT_SECRET = process.env.FOURSQUARE.CLIENT_SECRET;
const VERSION_DATE = process.env.FOURSQUARE.VERSION_DATE;

const GET_QUERY_AUTH_PART = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION_DATE}`;

const HTTP = axios.create({
  baseURL: process.env.FOURSQUARE.VENUES_URL,
});

HTTP.filterVenuesInArea = ({ longitude, latitude, radius, limit, section, isOpen, price }) => {
  const sectionPart = section ? `&section=${section.toLowerCase()}` : '';
  const url = `/explore?radius=${radius}&limit=${limit}&ll=${latitude},${longitude}&price=${price}&openNow=${isOpen ? 1 : 0}&${GET_QUERY_AUTH_PART}${sectionPart}`;


  return HTTP.get(url).then(response => response.data.response.groups[0].items);
};

export default HTTP;
