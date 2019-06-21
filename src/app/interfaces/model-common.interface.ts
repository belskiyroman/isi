export interface Serializable {
  serialize(input: any): Array<any> | object;
}
