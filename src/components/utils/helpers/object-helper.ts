import {UserType} from "./../../../redux/users-reducer";
import {PostType} from "./../../../redux/profile-reducer";
import {DialogType} from "./../../../redux/dialogs-reducer";

export const updateObjectInArray = (items: UserType[], itemId: number | null, itemPropName: number, newItemProps: {followed: boolean}) => {
  // return items.map(i => {
  //   if(i[itemPropName] === itemId) {
  //     return {...i, ...newItemProps}
  //     }
  //   return i
  // }
}