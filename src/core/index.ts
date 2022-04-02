export interface MemberDetailVO {
  /**
   * 生日，yyyy-MM-dd
   */
  birthday?: string;
}

export function interface2config(source: string) {
  const reg = /\*\s*(\w+),$/;
  console.log(reg.exec(source));
}
