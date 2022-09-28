import React from "react";
import CampaignCard from "./CampaignCard";

const campaigns = [
  {
    id: "campaign1",
    title:
      "ရဲဘော်၊ စစ်ရှောင်နှင့် ကလေးတွေအတွက် အသားဟင်း၊ အာဟာရဒါနနှင့် မုန့်အလှူလုပ်လို့ရပါတယ်",
    descriptions:
      "📌ထမင်းနှင့်အသားဟင်း လူ(၁၀၀)စာ ≥180,000ကျပ် <br />📌မုန့်နှင့်အအေး လူ(၁၀၀)စာ ≥70,000 ကျပ်",
    buttonText: "Donate Now",
    imgsSrc: [
      "utils/campaign.png",
      "utils/campaign.png",
      "utils/campaign.png",
      "utils/campaign.png",
    ],
  },
  {
    id: "campaign2",
    title:
      "ရဲဘော်၊ စစ်ရှောင်နှင့် ကလေးတွေအတွက် အသားဟင်း၊ အာဟာရဒါနနှင့် မုန့်အလှူလုပ်လို့ရပါတယ်",
    descriptions:
      "📌ထမင်းနှင့်အသားဟင်း လူ(၁၀၀)စာ ≥180,000ကျပ် <br />📌မုန့်နှင့်အအေး လူ(၁၀၀)စာ ≥70,000 ကျပ်",
    buttonText: "Donate Now",
    imgsSrc: [
      "utils/campaign.png",
      "utils/campaign.png",
      "utils/campaign.png",
      "utils/campaign.png",
    ],
  },
];

function Campaign() {
  console.log(campaigns[0])
  return (
    <div className="container g-5 py-5">
      <h1 className="pb-4">RECENT CAMPAIGN</h1>
      <CampaignCard campaign={campaigns[0]} imgLeft={true}/>
      <CampaignCard campaign={campaigns[1]} imgLeft={false}/>
    </div>
  );
}

export default Campaign;
