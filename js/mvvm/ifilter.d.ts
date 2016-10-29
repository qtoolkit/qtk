/**
 * CollectionViewModal的过滤器。
 */
export interface IFilter {
    /**
     * 检查该项数据满足条件，不满足条件的可以被过滤掉。
     * @param data 要检查的数据。
     * @return true表示满足条件，false表示不满足。
     */
    check(data: any): boolean;
}
