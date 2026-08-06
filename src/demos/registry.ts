import type { Component } from "vue";
import AvatarFallbackDemo from "./base/AvatarFallbackDemo.vue";
import AvatarGroupBasicDemo from "./base/AvatarGroupBasicDemo.vue";
import AvatarGroupSlotDemo from "./base/AvatarGroupSlotDemo.vue";
import AvatarSlotDemo from "./base/AvatarSlotDemo.vue";
import BadgeCountDemo from "./base/BadgeCountDemo.vue";
import BadgeDotDemo from "./base/BadgeDotDemo.vue";
import BadgeLimitDemo from "./base/BadgeLimitDemo.vue";
import ButtonBasicDemo from "./base/ButtonBasicDemo.vue";
import ButtonGroupBasicDemo from "./base/ButtonGroupBasicDemo.vue";
import ButtonGroupVerticalDemo from "./base/ButtonGroupVerticalDemo.vue";
import ButtonLoadingDemo from "./base/ButtonLoadingDemo.vue";
import ButtonMoreBasicDemo from "./base/ButtonMoreBasicDemo.vue";
import ButtonMoreControlledDemo from "./base/ButtonMoreControlledDemo.vue";
import ButtonTableDemo from "./base/ButtonTableDemo.vue";
import ButtonTableInlineDemo from "./base/ButtonTableInlineDemo.vue";
import ConfigProviderDensityDemo from "./base/ConfigProviderDensityDemo.vue";
import ConfigProviderDisabledDemo from "./base/ConfigProviderDisabledDemo.vue";
import GlobalComponentDemo from "./base/GlobalComponentDemo.vue";
import GlobalComponentGridDemo from "./base/GlobalComponentGridDemo.vue";
import IconButtonBasicDemo from "./base/IconButtonBasicDemo.vue";
import IconButtonLoadingDemo from "./base/IconButtonLoadingDemo.vue";
import IconStatusDemo from "./base/IconStatusDemo.vue";
import CheckboxBasicDemo from "./form/CheckboxBasicDemo.vue";
import CheckboxIndeterminateDemo from "./form/CheckboxIndeterminateDemo.vue";
import InputBasicDemo from "./form/InputBasicDemo.vue";
import InputPasswordDemo from "./form/InputPasswordDemo.vue";
import NumberInputBasicDemo from "./form/NumberInputBasicDemo.vue";
import NumberInputFormatDemo from "./form/NumberInputFormatDemo.vue";
import RadioBasicDemo from "./form/RadioBasicDemo.vue";
import RadioCardDemo from "./form/RadioCardDemo.vue";
import SearchInputBasicDemo from "./form/SearchInputBasicDemo.vue";
import SearchInputSuggestionDemo from "./form/SearchInputSuggestionDemo.vue";
import SegmentedBasicDemo from "./form/SegmentedBasicDemo.vue";
import SegmentedDisabledDemo from "./form/SegmentedDisabledDemo.vue";
import SwitchBasicDemo from "./form/SwitchBasicDemo.vue";
import SwitchBeforeChangeDemo from "./form/SwitchBeforeChangeDemo.vue";
import TextareaAutosizeDemo from "./form/TextareaAutosizeDemo.vue";
import TextareaLimitDemo from "./form/TextareaLimitDemo.vue";
import IconGalleryDemo from "./base/IconGalleryDemo.vue";
import LinkBasicDemo from "./base/LinkBasicDemo.vue";
import LinkDisabledDemo from "./base/LinkDisabledDemo.vue";
import SvgIconBasicDemo from "./base/SvgIconBasicDemo.vue";
import SvgIconMetaDemo from "./base/SvgIconMetaDemo.vue";
import TextSemanticsDemo from "./base/TextSemanticsDemo.vue";
import TextTruncateDemo from "./base/TextTruncateDemo.vue";
import ThemeSvgBasicDemo from "./base/ThemeSvgBasicDemo.vue";
import ThemeSvgMetadataDemo from "./base/ThemeSvgMetadataDemo.vue";

export interface BlockDemoDefinition {
  component: Component;
}

/** Markdown 通过 demo ID 引用此表；源码由 Markdown 代码块负责展示。 */
const manualDemoRegistry: Record<string, BlockDemoDefinition> = {
  "badge-count": { component: BadgeCountDemo },
  "badge-limit": { component: BadgeLimitDemo },
  "badge-dot": { component: BadgeDotDemo },
  "button-basic": { component: ButtonBasicDemo },
  "button-loading": { component: ButtonLoadingDemo },
  "avatar-fallback": { component: AvatarFallbackDemo },
  "avatar-slot": { component: AvatarSlotDemo },
  "avatar-group-basic": { component: AvatarGroupBasicDemo },
  "avatar-group-slot": { component: AvatarGroupSlotDemo },
  "icon-status": { component: IconStatusDemo },
  "icon-gallery": { component: IconGalleryDemo },
  "checkbox-basic": { component: CheckboxBasicDemo },
  "checkbox-indeterminate": { component: CheckboxIndeterminateDemo },
  "input-basic": { component: InputBasicDemo },
  "input-password": { component: InputPasswordDemo },
  "textarea-limit": { component: TextareaLimitDemo },
  "textarea-autosize": { component: TextareaAutosizeDemo },
  "number-input-basic": { component: NumberInputBasicDemo },
  "number-input-format": { component: NumberInputFormatDemo },
  "radio-basic": { component: RadioBasicDemo },
  "radio-card": { component: RadioCardDemo },
  "search-input-basic": { component: SearchInputBasicDemo },
  "search-input-suggestion": { component: SearchInputSuggestionDemo },
  "segmented-basic": { component: SegmentedBasicDemo },
  "segmented-disabled": { component: SegmentedDisabledDemo },
  "switch-basic": { component: SwitchBasicDemo },
  "switch-before-change": { component: SwitchBeforeChangeDemo },
  "button-group-basic": { component: ButtonGroupBasicDemo },
  "button-group-vertical": { component: ButtonGroupVerticalDemo },
  "button-more-basic": { component: ButtonMoreBasicDemo },
  "button-more-controlled": { component: ButtonMoreControlledDemo },
  "button-table-basic": { component: ButtonTableDemo },
  "button-table-inline": { component: ButtonTableInlineDemo },
  "config-provider-density": { component: ConfigProviderDensityDemo },
  "config-provider-disabled": { component: ConfigProviderDisabledDemo },
  "global-component-boundary": { component: GlobalComponentDemo },
  "global-component-grid": { component: GlobalComponentGridDemo },
  "icon-button-basic": { component: IconButtonBasicDemo },
  "icon-button-loading": { component: IconButtonLoadingDemo },
  "link-basic": { component: LinkBasicDemo },
  "link-disabled": { component: LinkDisabledDemo },
  "svg-icon-basic": { component: SvgIconBasicDemo },
  "svg-icon-meta": { component: SvgIconMetaDemo },
  "text-semantics": { component: TextSemanticsDemo },
  "text-truncate": { component: TextTruncateDemo },
  "theme-svg-basic": { component: ThemeSvgBasicDemo },
  "theme-svg-metadata": { component: ThemeSvgMetadataDemo },
};

/**
 * 新增文档 Demo 统一以小写短横线 ID 命名文件，例如 form-select-basic.vue。
 * 运行时由 Vite 自动收集，避免不同分类并行维护时集中修改注册表产生冲突。
 */
const automaticDemoModules = import.meta.glob<Component>("./**/[a-z0-9-]*.vue", {
  eager: true,
  import: "default",
});
const automaticDemoRegistry = Object.fromEntries(
  Object.entries(automaticDemoModules).map(([modulePath, component]) => {
    const demoId = modulePath.slice(modulePath.lastIndexOf("/") + 1, -".vue".length);
    return [demoId, { component } satisfies BlockDemoDefinition];
  }),
) as Record<string, BlockDemoDefinition>;
const blockDemoRegistry: Record<string, BlockDemoDefinition> = {
  ...manualDemoRegistry,
  ...automaticDemoRegistry,
};

export function getBlockDemo(demoId: string): BlockDemoDefinition | undefined {
  return blockDemoRegistry[demoId];
}
