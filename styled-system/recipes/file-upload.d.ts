/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface FileUploadVariant {
  
}

type FileUploadVariantMap = {
  [key in keyof FileUploadVariant]: Array<FileUploadVariant[key]>
}

export type FileUploadVariantProps = {
  [key in keyof FileUploadVariant]?: ConditionalValue<FileUploadVariant[key]>
}

export interface FileUploadRecipe {
  __type: FileUploadVariantProps
  (props?: FileUploadVariantProps): Pretty<Record<"root" | "dropzone" | "trigger" | "label" | "item" | "itemName" | "itemPreview" | "itemSizeText" | "itemDeleteTrigger" | "itemGroup", string>>
  raw: (props?: FileUploadVariantProps) => FileUploadVariantProps
  variantMap: FileUploadVariantMap
  variantKeys: Array<keyof FileUploadVariant>
  splitVariantProps<Props extends FileUploadVariantProps>(props: Props): [FileUploadVariantProps, Pretty<DistributiveOmit<Props, keyof FileUploadVariantProps>>]
}


export declare const fileUpload: FileUploadRecipe