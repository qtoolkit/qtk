/**
 * CollectionViewModal的比较器，用于排序。
 */
export interface IComparator {
    /**
     * 比较两个数据项的大小。
     * @param a 数据a。
     * @param b 数据b。
     * @return 负数表示a < b，0表示a==b，整数表示a > b;
     */
    compare(a: any, b: any): number;
}
