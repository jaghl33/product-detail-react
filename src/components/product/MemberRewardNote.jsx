import React from 'react';
import { useSelector } from 'react-redux';
import ProductData from '../../../product-data.json';
import '../../style/MemberRewardNote.scss';

function MemberRewardNote() {
  const { membership } = ProductData.product;

  const getTextFormatLink = (content) => {
    const { benefitsHeading, actions } = content;
    const link = `<a href="${actions.coopMemberReward.target}">${actions.coopMemberReward.text}</a>`;
    return benefitsHeading.replace('%%coopMemberReward%%', link);
  };

  const membershipText = getTextFormatLink(membership.content);
  const membershipImage = `/src${membership.image.url}`;

  return (
    <div className="member-reward">
      <div className="member-reward__image">
        <img src={membershipImage} alt="Membership" />
      </div>
      <p dangerouslySetInnerHTML={{ __html: membershipText }}></p>
    </div>
  );
}

export default MemberRewardNote;
