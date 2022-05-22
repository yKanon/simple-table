import { Ref } from "vue";
import useState from "../../../hooks/useState";
import { RecordType } from '../interface';

export const useSortable = () => {
  const [sorter, setSorter] = useState<string>('');

  // 内置三种排序方式：asc, desc, none
  const handleSort = () => {
    if (sorter.value === '') {
      setSorter('asc');
    } else if (sorter.value === 'asc') {
      setSorter('desc');
    } else {
      setSorter('')
    }
  }

  return {
    handleSort,
    sorter
  }
};