import React, {memo, useEffect} from 'react';
// import {connect} from "react-redux";
import {useDispatch, useSelector} from "react-redux"; //hooks
import {getTopBannerAction} from './store/actionCreators';

function WangRecommend(props) {

  //组件和reducer关联
  const {topBanners} = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }));
  const dispatch = useDispatch();

//发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch]);

  return (
      <div>
        <div>WangRecommend:{topBanners.length}</div>
      </div>
  )
}

export default memo(WangRecommend);


//   const { getBanners, topBanners } = props;
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
//
//     return (
//         <div>
//           <div>WangRecommend: {topBanners.length}</div>
//         </div>
//     )
// }
//
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })
//
// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(memo(WangRecommend))



