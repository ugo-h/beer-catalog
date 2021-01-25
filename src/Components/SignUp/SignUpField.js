import { connect } from 'react-redux';
import { setSignUpFormFieldValue } from '../../actions/signUpFormActions';
import Field from '../Util/Field/Field';

const mapStateToProps = ({ signUpForm }) => ({
    fields: { ...signUpForm.fields }
});

export default connect(mapStateToProps, { setSignUpFormFieldValue })(Field);
