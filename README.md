# Protected NFT marketplace

## Team name: notBot

### Project description:

We have made NFT marketplace with Gitcoin Passport to provide defense of artists from bots.

Link on [LIVE DEMO](https://passport-nft-marketplace.vercel.app/)  
[Video presentation](https://youtu.be/Yr48lnKGMQM)  
[Presentation slides](https://drive.google.com/file/d/1u7MdXRXBKA2OhJ4vjYCVrFfxVggORCeZ/view?usp=sharing)

**When project was started**: Around between 18 and 20 june.

### Solved problems:

1. **Buyers-monopolists** - usually artists want to distribute NFT-collection for a lot of people, not only couple ot them. But there are a lot of situation when one-three buyers completely bough out whole collection with help of bots.
2. **Gas wars** - when really popular collection has dropped, people want to overtake competitors and because of that decide to pay more for gas to be first who can validate transaction in network.
3. Preventing **Sybil attack** - similarly with first problem, but in that case NFT not just artwork but with right for voting.

### Our plans:

1. Development on-chain smartcontract for collecting validated (with help of Gitcoin Passport) ETH addresses. In our marketplace user have ability to subscribe for some collection and when drop will be provide users will receive notification about that OR maybe will recive NFT automatically. We still thinking about model.
2. Focus not just on technical part but in UI and UX.
3. Making collaboration with artists

Don't forget to see our [video-presentation](https://youtu.be/Yr48lnKGMQM) and [slides](https://drive.google.com/file/d/1u7MdXRXBKA2OhJ4vjYCVrFfxVggORCeZ/view?usp=sharing) for more details and project architecture.

### How to run the project:

1. `npm i` or `yarn`
2. `npm run dev` or `yarn dev`

### Possible problems with Gitcoin passport SDK:

1. **Missed dependencies in passport SDK**  
   **How to solve**: clone SDK [repo](https://github.com/gitcoinco/passport-sdk), go to necessary package, run `npm run build` or `yarn build`, copy built folder to your project and link them directly

2. **Malicious scripts and other attack vectors on your frontend**  
   **How to solve**: Don't trust your frontend, double check user addresses with passport-sdk on your backend to be sure what all required stamps are valid.

### Creators:

[Elizabeth Dmitriyeva](https://www.linkedin.com/in/elizaveta-dmitrieva-4a1bb9242/) - design

[Dmitrii Suchkov](https://www.linkedin.com/in/suchkov-dv/) - web 3.0 dev

[Nikita Savin](https://www.linkedin.com/in/nlsavin/) - blockchain architect

[Jannet Buterus](https://www.linkedin.com/in/buterusju/) - UI/UX expert
