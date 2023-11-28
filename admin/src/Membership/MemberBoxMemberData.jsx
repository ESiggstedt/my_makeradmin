import React from 'react';
import PropTypes from 'prop-types';
import Member from "../Models/Member";
import MemberForm from "../Components/MemberForm";
import { confirmModal } from "../message";
import { withRouter } from "react-router";
// ADDED THIS
import auth from '../auth';


class MemberBoxMemberData extends React.Component {

    // ADDED THIS
    update_member_info(member_id) {
        console.log('HEJ1!!');
        console.log(this.context.member.member_id);
        console.log(this.context.member.id);
        auth.update_member_info(member_id);
    }

    render() {
        const { router } = this.props;

        return (
            <div className='uk-margin-top'>
                <MemberForm
                    member={this.context.member}
                    // ADDED THIS
                    onSave={() => { this.update_member_info(this.context.member.member_id); this.context.member.save(); }}
                    onDelete={() => {
                        const { member } = this.context;
                        return confirmModal(member.deleteConfirmMessage())
                            .then(() => member.del())
                            .then(() => {
                                router.push("/membership/members/");
                            })
                            .catch(() => null);
                    }}
                />
            </div>
        );
    }
}

MemberBoxMemberData.contextTypes = {
    member: PropTypes.instanceOf(Member)
};


export default withRouter(MemberBoxMemberData);
