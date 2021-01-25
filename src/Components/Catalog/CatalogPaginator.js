import { connect } from 'react-redux';
import Paginator from '../Util/Paginator/Paginator';
import { setPage } from '../../actions/productActions';

const mapStateToProps = ({ products }) => ({
    currentPage: products.currentPage
});

export default connect(mapStateToProps, { setPage })(Paginator);
