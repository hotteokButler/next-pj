import ExploreMainCon from '../_components/ExploreMainCon';
import SearchInput from '../_components/SearchInput';
import TrendSection from '../_components/TrendSection';

export default function Explore() {
  return (
    <ExploreMainCon>
      <SearchInput isFixed={false} />


      {/* 나를위한 트랜드 */}
      <TrendSection/>
    </ExploreMainCon>
  );
}
