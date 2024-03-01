/* eslint-disable */
export type Token = "aspectRatios.square" | "aspectRatios.landscape" | "aspectRatios.portrait" | "aspectRatios.wide" | "aspectRatios.ultrawide" | "aspectRatios.golden" | "shadows.xs" | "shadows.sm" | "shadows.md" | "shadows.lg" | "shadows.xl" | "shadows.2xl" | "shadows.inner" | "animations.spin" | "animations.ping" | "animations.pulse" | "animations.bounce" | "animations.backdrop-in" | "animations.backdrop-out" | "animations.dialog-in" | "animations.dialog-out" | "animations.drawer-in-left" | "animations.drawer-out-left" | "animations.drawer-in-right" | "animations.drawer-out-right" | "animations.skeleton-pulse" | "animations.fade-in" | "animations.collapse-in" | "animations.collapse-out" | "blurs.sm" | "blurs.base" | "blurs.md" | "blurs.lg" | "blurs.xl" | "blurs.2xl" | "blurs.3xl" | "borders.none" | "colors.rose.50" | "colors.rose.100" | "colors.rose.200" | "colors.rose.300" | "colors.rose.400" | "colors.rose.500" | "colors.rose.600" | "colors.rose.700" | "colors.rose.800" | "colors.rose.900" | "colors.rose.950" | "colors.pink.50" | "colors.pink.100" | "colors.pink.200" | "colors.pink.300" | "colors.pink.400" | "colors.pink.500" | "colors.pink.600" | "colors.pink.700" | "colors.pink.800" | "colors.pink.900" | "colors.pink.950" | "colors.fuchsia.50" | "colors.fuchsia.100" | "colors.fuchsia.200" | "colors.fuchsia.300" | "colors.fuchsia.400" | "colors.fuchsia.500" | "colors.fuchsia.600" | "colors.fuchsia.700" | "colors.fuchsia.800" | "colors.fuchsia.900" | "colors.fuchsia.950" | "colors.purple.50" | "colors.purple.100" | "colors.purple.200" | "colors.purple.300" | "colors.purple.400" | "colors.purple.500" | "colors.purple.600" | "colors.purple.700" | "colors.purple.800" | "colors.purple.900" | "colors.purple.950" | "colors.violet.50" | "colors.violet.100" | "colors.violet.200" | "colors.violet.300" | "colors.violet.400" | "colors.violet.500" | "colors.violet.600" | "colors.violet.700" | "colors.violet.800" | "colors.violet.900" | "colors.violet.950" | "colors.indigo.50" | "colors.indigo.100" | "colors.indigo.200" | "colors.indigo.300" | "colors.indigo.400" | "colors.indigo.500" | "colors.indigo.600" | "colors.indigo.700" | "colors.indigo.800" | "colors.indigo.900" | "colors.indigo.950" | "colors.blue.50" | "colors.blue.100" | "colors.blue.200" | "colors.blue.300" | "colors.blue.400" | "colors.blue.500" | "colors.blue.600" | "colors.blue.700" | "colors.blue.800" | "colors.blue.900" | "colors.blue.950" | "colors.sky.50" | "colors.sky.100" | "colors.sky.200" | "colors.sky.300" | "colors.sky.400" | "colors.sky.500" | "colors.sky.600" | "colors.sky.700" | "colors.sky.800" | "colors.sky.900" | "colors.sky.950" | "colors.cyan.50" | "colors.cyan.100" | "colors.cyan.200" | "colors.cyan.300" | "colors.cyan.400" | "colors.cyan.500" | "colors.cyan.600" | "colors.cyan.700" | "colors.cyan.800" | "colors.cyan.900" | "colors.cyan.950" | "colors.teal.50" | "colors.teal.100" | "colors.teal.200" | "colors.teal.300" | "colors.teal.400" | "colors.teal.500" | "colors.teal.600" | "colors.teal.700" | "colors.teal.800" | "colors.teal.900" | "colors.teal.950" | "colors.emerald.50" | "colors.emerald.100" | "colors.emerald.200" | "colors.emerald.300" | "colors.emerald.400" | "colors.emerald.500" | "colors.emerald.600" | "colors.emerald.700" | "colors.emerald.800" | "colors.emerald.900" | "colors.emerald.950" | "colors.green.50" | "colors.green.100" | "colors.green.200" | "colors.green.300" | "colors.green.400" | "colors.green.500" | "colors.green.600" | "colors.green.700" | "colors.green.800" | "colors.green.900" | "colors.green.950" | "colors.lime.50" | "colors.lime.100" | "colors.lime.200" | "colors.lime.300" | "colors.lime.400" | "colors.lime.500" | "colors.lime.600" | "colors.lime.700" | "colors.lime.800" | "colors.lime.900" | "colors.lime.950" | "colors.yellow.50" | "colors.yellow.100" | "colors.yellow.200" | "colors.yellow.300" | "colors.yellow.400" | "colors.yellow.500" | "colors.yellow.600" | "colors.yellow.700" | "colors.yellow.800" | "colors.yellow.900" | "colors.yellow.950" | "colors.orange.50" | "colors.orange.100" | "colors.orange.200" | "colors.orange.300" | "colors.orange.400" | "colors.orange.500" | "colors.orange.600" | "colors.orange.700" | "colors.orange.800" | "colors.orange.900" | "colors.orange.950" | "colors.red.50" | "colors.red.100" | "colors.red.200" | "colors.red.300" | "colors.red.400" | "colors.red.500" | "colors.red.600" | "colors.red.700" | "colors.red.800" | "colors.red.900" | "colors.red.950" | "colors.neutral.50" | "colors.neutral.100" | "colors.neutral.200" | "colors.neutral.300" | "colors.neutral.400" | "colors.neutral.500" | "colors.neutral.600" | "colors.neutral.700" | "colors.neutral.800" | "colors.neutral.900" | "colors.neutral.950" | "colors.stone.50" | "colors.stone.100" | "colors.stone.200" | "colors.stone.300" | "colors.stone.400" | "colors.stone.500" | "colors.stone.600" | "colors.stone.700" | "colors.stone.800" | "colors.stone.900" | "colors.stone.950" | "colors.zinc.50" | "colors.zinc.100" | "colors.zinc.200" | "colors.zinc.300" | "colors.zinc.400" | "colors.zinc.500" | "colors.zinc.600" | "colors.zinc.700" | "colors.zinc.800" | "colors.zinc.900" | "colors.zinc.950" | "colors.slate.50" | "colors.slate.100" | "colors.slate.200" | "colors.slate.300" | "colors.slate.400" | "colors.slate.500" | "colors.slate.600" | "colors.slate.700" | "colors.slate.800" | "colors.slate.900" | "colors.slate.950" | "colors.current" | "colors.black" | "colors.white" | "colors.transparent" | "colors.amber.50" | "colors.amber.100" | "colors.amber.200" | "colors.amber.300" | "colors.amber.400" | "colors.amber.500" | "colors.amber.600" | "colors.amber.700" | "colors.amber.800" | "colors.amber.900" | "colors.amber.950" | "colors.amber.light.1" | "colors.amber.light.2" | "colors.amber.light.3" | "colors.amber.light.4" | "colors.amber.light.5" | "colors.amber.light.6" | "colors.amber.light.7" | "colors.amber.light.8" | "colors.amber.light.9" | "colors.amber.light.10" | "colors.amber.light.11" | "colors.amber.light.12" | "colors.amber.light.a1" | "colors.amber.light.a2" | "colors.amber.light.a3" | "colors.amber.light.a4" | "colors.amber.light.a5" | "colors.amber.light.a6" | "colors.amber.light.a7" | "colors.amber.light.a8" | "colors.amber.light.a9" | "colors.amber.light.a10" | "colors.amber.light.a11" | "colors.amber.light.a12" | "colors.amber.dark.1" | "colors.amber.dark.2" | "colors.amber.dark.3" | "colors.amber.dark.4" | "colors.amber.dark.5" | "colors.amber.dark.6" | "colors.amber.dark.7" | "colors.amber.dark.8" | "colors.amber.dark.9" | "colors.amber.dark.10" | "colors.amber.dark.11" | "colors.amber.dark.12" | "colors.amber.dark.a1" | "colors.amber.dark.a2" | "colors.amber.dark.a3" | "colors.amber.dark.a4" | "colors.amber.dark.a5" | "colors.amber.dark.a6" | "colors.amber.dark.a7" | "colors.amber.dark.a8" | "colors.amber.dark.a9" | "colors.amber.dark.a10" | "colors.amber.dark.a11" | "colors.amber.dark.a12" | "colors.gray.50" | "colors.gray.100" | "colors.gray.200" | "colors.gray.300" | "colors.gray.400" | "colors.gray.500" | "colors.gray.600" | "colors.gray.700" | "colors.gray.800" | "colors.gray.900" | "colors.gray.950" | "colors.gray.light.1" | "colors.gray.light.2" | "colors.gray.light.3" | "colors.gray.light.4" | "colors.gray.light.5" | "colors.gray.light.6" | "colors.gray.light.7" | "colors.gray.light.8" | "colors.gray.light.9" | "colors.gray.light.10" | "colors.gray.light.11" | "colors.gray.light.12" | "colors.gray.light.a1" | "colors.gray.light.a2" | "colors.gray.light.a3" | "colors.gray.light.a4" | "colors.gray.light.a5" | "colors.gray.light.a6" | "colors.gray.light.a7" | "colors.gray.light.a8" | "colors.gray.light.a9" | "colors.gray.light.a10" | "colors.gray.light.a11" | "colors.gray.light.a12" | "colors.gray.dark.1" | "colors.gray.dark.2" | "colors.gray.dark.3" | "colors.gray.dark.4" | "colors.gray.dark.5" | "colors.gray.dark.6" | "colors.gray.dark.7" | "colors.gray.dark.8" | "colors.gray.dark.9" | "colors.gray.dark.10" | "colors.gray.dark.11" | "colors.gray.dark.12" | "colors.gray.dark.a1" | "colors.gray.dark.a2" | "colors.gray.dark.a3" | "colors.gray.dark.a4" | "colors.gray.dark.a5" | "colors.gray.dark.a6" | "colors.gray.dark.a7" | "colors.gray.dark.a8" | "colors.gray.dark.a9" | "colors.gray.dark.a10" | "colors.gray.dark.a11" | "colors.gray.dark.a12" | "colors.sand.light.1" | "colors.sand.light.2" | "colors.sand.light.3" | "colors.sand.light.4" | "colors.sand.light.5" | "colors.sand.light.6" | "colors.sand.light.7" | "colors.sand.light.8" | "colors.sand.light.9" | "colors.sand.light.10" | "colors.sand.light.11" | "colors.sand.light.12" | "colors.sand.light.a1" | "colors.sand.light.a2" | "colors.sand.light.a3" | "colors.sand.light.a4" | "colors.sand.light.a5" | "colors.sand.light.a6" | "colors.sand.light.a7" | "colors.sand.light.a8" | "colors.sand.light.a9" | "colors.sand.light.a10" | "colors.sand.light.a11" | "colors.sand.light.a12" | "colors.sand.dark.1" | "colors.sand.dark.2" | "colors.sand.dark.3" | "colors.sand.dark.4" | "colors.sand.dark.5" | "colors.sand.dark.6" | "colors.sand.dark.7" | "colors.sand.dark.8" | "colors.sand.dark.9" | "colors.sand.dark.10" | "colors.sand.dark.11" | "colors.sand.dark.12" | "colors.sand.dark.a1" | "colors.sand.dark.a2" | "colors.sand.dark.a3" | "colors.sand.dark.a4" | "colors.sand.dark.a5" | "colors.sand.dark.a6" | "colors.sand.dark.a7" | "colors.sand.dark.a8" | "colors.sand.dark.a9" | "colors.sand.dark.a10" | "colors.sand.dark.a11" | "colors.sand.dark.a12" | "durations.fastest" | "durations.faster" | "durations.fast" | "durations.normal" | "durations.slow" | "durations.slower" | "durations.slowest" | "easings.linear" | "easings.in" | "easings.out" | "easings.in-out" | "easings.pulse" | "easings.default" | "easings.emphasized-in" | "easings.emphasized-out" | "fontSizes.2xs" | "fontSizes.xs" | "fontSizes.sm" | "fontSizes.md" | "fontSizes.lg" | "fontSizes.xl" | "fontSizes.2xl" | "fontSizes.3xl" | "fontSizes.4xl" | "fontSizes.5xl" | "fontSizes.6xl" | "fontSizes.7xl" | "fontSizes.8xl" | "fontSizes.9xl" | "fontWeights.thin" | "fontWeights.extralight" | "fontWeights.light" | "fontWeights.normal" | "fontWeights.medium" | "fontWeights.semibold" | "fontWeights.bold" | "fontWeights.extrabold" | "fontWeights.black" | "letterSpacings.tighter" | "letterSpacings.tight" | "letterSpacings.normal" | "letterSpacings.wide" | "letterSpacings.wider" | "letterSpacings.widest" | "lineHeights.snug" | "lineHeights.none" | "lineHeights.tight" | "lineHeights.normal" | "lineHeights.relaxed" | "lineHeights.loose" | "radii.none" | "radii.2xs" | "radii.xs" | "radii.sm" | "radii.md" | "radii.lg" | "radii.xl" | "radii.2xl" | "radii.3xl" | "radii.full" | "sizes.0" | "sizes.1" | "sizes.2" | "sizes.3" | "sizes.4" | "sizes.5" | "sizes.6" | "sizes.7" | "sizes.8" | "sizes.9" | "sizes.10" | "sizes.11" | "sizes.12" | "sizes.14" | "sizes.16" | "sizes.20" | "sizes.24" | "sizes.28" | "sizes.32" | "sizes.36" | "sizes.40" | "sizes.44" | "sizes.48" | "sizes.52" | "sizes.56" | "sizes.60" | "sizes.64" | "sizes.72" | "sizes.80" | "sizes.96" | "sizes.prose" | "sizes.0.5" | "sizes.1.5" | "sizes.2.5" | "sizes.3.5" | "sizes.4.5" | "sizes.2xs" | "sizes.xs" | "sizes.sm" | "sizes.md" | "sizes.lg" | "sizes.xl" | "sizes.2xl" | "sizes.3xl" | "sizes.4xl" | "sizes.5xl" | "sizes.6xl" | "sizes.7xl" | "sizes.8xl" | "sizes.full" | "sizes.min" | "sizes.max" | "sizes.fit" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "spacing.0" | "spacing.1" | "spacing.2" | "spacing.3" | "spacing.4" | "spacing.5" | "spacing.6" | "spacing.7" | "spacing.8" | "spacing.9" | "spacing.10" | "spacing.11" | "spacing.12" | "spacing.14" | "spacing.16" | "spacing.20" | "spacing.24" | "spacing.28" | "spacing.32" | "spacing.36" | "spacing.40" | "spacing.44" | "spacing.48" | "spacing.52" | "spacing.56" | "spacing.60" | "spacing.64" | "spacing.72" | "spacing.80" | "spacing.96" | "spacing.0.5" | "spacing.1.5" | "spacing.2.5" | "spacing.3.5" | "spacing.4.5" | "zIndex.hide" | "zIndex.base" | "zIndex.docked" | "zIndex.dropdown" | "zIndex.sticky" | "zIndex.banner" | "zIndex.overlay" | "zIndex.modal" | "zIndex.popover" | "zIndex.skipLink" | "zIndex.toast" | "zIndex.tooltip" | "fonts.sans" | "fonts.serif" | "fonts.mono" | "fonts.philosopher" | "fonts.pirataOne" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "colors.amber.1" | "colors.amber.2" | "colors.amber.3" | "colors.amber.4" | "colors.amber.5" | "colors.amber.6" | "colors.amber.7" | "colors.amber.8" | "colors.amber.9" | "colors.amber.10" | "colors.amber.11" | "colors.amber.12" | "colors.amber.a1" | "colors.amber.a2" | "colors.amber.a3" | "colors.amber.a4" | "colors.amber.a5" | "colors.amber.a6" | "colors.amber.a7" | "colors.amber.a8" | "colors.amber.a9" | "colors.amber.a10" | "colors.amber.a11" | "colors.amber.a12" | "colors.amber.default" | "colors.amber.emphasized" | "colors.amber.fg" | "colors.amber.text" | "colors.sand.1" | "colors.sand.2" | "colors.sand.3" | "colors.sand.4" | "colors.sand.5" | "colors.sand.6" | "colors.sand.7" | "colors.sand.8" | "colors.sand.9" | "colors.sand.10" | "colors.sand.11" | "colors.sand.12" | "colors.sand.a1" | "colors.sand.a2" | "colors.sand.a3" | "colors.sand.a4" | "colors.sand.a5" | "colors.sand.a6" | "colors.sand.a7" | "colors.sand.a8" | "colors.sand.a9" | "colors.sand.a10" | "colors.sand.a11" | "colors.sand.a12" | "colors.sand.default" | "colors.sand.emphasized" | "colors.sand.fg" | "colors.sand.text" | "colors.gray.1" | "colors.gray.2" | "colors.gray.3" | "colors.gray.4" | "colors.gray.5" | "colors.gray.6" | "colors.gray.7" | "colors.gray.8" | "colors.gray.9" | "colors.gray.10" | "colors.gray.11" | "colors.gray.12" | "colors.gray.a1" | "colors.gray.a2" | "colors.gray.a3" | "colors.gray.a4" | "colors.gray.a5" | "colors.gray.a6" | "colors.gray.a7" | "colors.gray.a8" | "colors.gray.a9" | "colors.gray.a10" | "colors.gray.a11" | "colors.gray.a12" | "colors.gray.default" | "colors.gray.emphasized" | "colors.gray.fg" | "colors.gray.text" | "colors.accent.1" | "colors.accent.2" | "colors.accent.3" | "colors.accent.4" | "colors.accent.5" | "colors.accent.6" | "colors.accent.7" | "colors.accent.8" | "colors.accent.9" | "colors.accent.10" | "colors.accent.11" | "colors.accent.12" | "colors.accent.a1" | "colors.accent.a2" | "colors.accent.a3" | "colors.accent.a4" | "colors.accent.a5" | "colors.accent.a6" | "colors.accent.a7" | "colors.accent.a8" | "colors.accent.a9" | "colors.accent.a10" | "colors.accent.a11" | "colors.accent.a12" | "colors.accent.default" | "colors.accent.emphasized" | "colors.accent.fg" | "colors.accent.text" | "colors.bg.canvas" | "colors.bg.default" | "colors.bg.subtle" | "colors.bg.muted" | "colors.bg.emphasized" | "colors.bg.disabled" | "colors.fg.default" | "colors.fg.muted" | "colors.fg.subtle" | "colors.fg.disabled" | "colors.border.default" | "colors.border.muted" | "colors.border.subtle" | "colors.border.disabled" | "colors.border.outline" | "radii.l1" | "radii.l2" | "radii.l3" | "spacing.-1" | "spacing.-2" | "spacing.-3" | "spacing.-4" | "spacing.-5" | "spacing.-6" | "spacing.-7" | "spacing.-8" | "spacing.-9" | "spacing.-10" | "spacing.-11" | "spacing.-12" | "spacing.-14" | "spacing.-16" | "spacing.-20" | "spacing.-24" | "spacing.-28" | "spacing.-32" | "spacing.-36" | "spacing.-40" | "spacing.-44" | "spacing.-48" | "spacing.-52" | "spacing.-56" | "spacing.-60" | "spacing.-64" | "spacing.-72" | "spacing.-80" | "spacing.-96" | "spacing.-0.5" | "spacing.-1.5" | "spacing.-2.5" | "spacing.-3.5" | "spacing.-4.5" | "colors.colorPalette.50" | "colors.colorPalette.100" | "colors.colorPalette.200" | "colors.colorPalette.300" | "colors.colorPalette.400" | "colors.colorPalette.500" | "colors.colorPalette.600" | "colors.colorPalette.700" | "colors.colorPalette.800" | "colors.colorPalette.900" | "colors.colorPalette.950" | "colors.colorPalette" | "colors.colorPalette.light.1" | "colors.colorPalette.1" | "colors.colorPalette.light.2" | "colors.colorPalette.2" | "colors.colorPalette.light.3" | "colors.colorPalette.3" | "colors.colorPalette.light.4" | "colors.colorPalette.4" | "colors.colorPalette.light.5" | "colors.colorPalette.5" | "colors.colorPalette.light.6" | "colors.colorPalette.6" | "colors.colorPalette.light.7" | "colors.colorPalette.7" | "colors.colorPalette.light.8" | "colors.colorPalette.8" | "colors.colorPalette.light.9" | "colors.colorPalette.9" | "colors.colorPalette.light.10" | "colors.colorPalette.10" | "colors.colorPalette.light.11" | "colors.colorPalette.11" | "colors.colorPalette.light.12" | "colors.colorPalette.12" | "colors.colorPalette.light.a1" | "colors.colorPalette.a1" | "colors.colorPalette.light.a2" | "colors.colorPalette.a2" | "colors.colorPalette.light.a3" | "colors.colorPalette.a3" | "colors.colorPalette.light.a4" | "colors.colorPalette.a4" | "colors.colorPalette.light.a5" | "colors.colorPalette.a5" | "colors.colorPalette.light.a6" | "colors.colorPalette.a6" | "colors.colorPalette.light.a7" | "colors.colorPalette.a7" | "colors.colorPalette.light.a8" | "colors.colorPalette.a8" | "colors.colorPalette.light.a9" | "colors.colorPalette.a9" | "colors.colorPalette.light.a10" | "colors.colorPalette.a10" | "colors.colorPalette.light.a11" | "colors.colorPalette.a11" | "colors.colorPalette.light.a12" | "colors.colorPalette.a12" | "colors.colorPalette.dark.1" | "colors.colorPalette.dark.2" | "colors.colorPalette.dark.3" | "colors.colorPalette.dark.4" | "colors.colorPalette.dark.5" | "colors.colorPalette.dark.6" | "colors.colorPalette.dark.7" | "colors.colorPalette.dark.8" | "colors.colorPalette.dark.9" | "colors.colorPalette.dark.10" | "colors.colorPalette.dark.11" | "colors.colorPalette.dark.12" | "colors.colorPalette.dark.a1" | "colors.colorPalette.dark.a2" | "colors.colorPalette.dark.a3" | "colors.colorPalette.dark.a4" | "colors.colorPalette.dark.a5" | "colors.colorPalette.dark.a6" | "colors.colorPalette.dark.a7" | "colors.colorPalette.dark.a8" | "colors.colorPalette.dark.a9" | "colors.colorPalette.dark.a10" | "colors.colorPalette.dark.a11" | "colors.colorPalette.dark.a12" | "colors.colorPalette.default" | "colors.colorPalette.emphasized" | "colors.colorPalette.fg" | "colors.colorPalette.text" | "colors.colorPalette.canvas" | "colors.colorPalette.subtle" | "colors.colorPalette.muted" | "colors.colorPalette.disabled" | "colors.colorPalette.outline"

export type ColorPalette = "rose" | "pink" | "fuchsia" | "purple" | "violet" | "indigo" | "blue" | "sky" | "cyan" | "teal" | "emerald" | "green" | "lime" | "yellow" | "orange" | "red" | "neutral" | "stone" | "zinc" | "slate" | "current" | "black" | "white" | "transparent" | "amber" | "amber.light" | "amber.dark" | "gray" | "gray.light" | "gray.dark" | "sand" | "sand.light" | "sand.dark" | "accent" | "bg" | "fg" | "border"

export type AspectRatioToken = "square" | "landscape" | "portrait" | "wide" | "ultrawide" | "golden"

export type ShadowToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner"

export type AnimationToken = "spin" | "ping" | "pulse" | "bounce" | "backdrop-in" | "backdrop-out" | "dialog-in" | "dialog-out" | "drawer-in-left" | "drawer-out-left" | "drawer-in-right" | "drawer-out-right" | "skeleton-pulse" | "fade-in" | "collapse-in" | "collapse-out"

export type BlurToken = "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl"

export type BorderToken = "none"

export type ColorToken = "rose.50" | "rose.100" | "rose.200" | "rose.300" | "rose.400" | "rose.500" | "rose.600" | "rose.700" | "rose.800" | "rose.900" | "rose.950" | "pink.50" | "pink.100" | "pink.200" | "pink.300" | "pink.400" | "pink.500" | "pink.600" | "pink.700" | "pink.800" | "pink.900" | "pink.950" | "fuchsia.50" | "fuchsia.100" | "fuchsia.200" | "fuchsia.300" | "fuchsia.400" | "fuchsia.500" | "fuchsia.600" | "fuchsia.700" | "fuchsia.800" | "fuchsia.900" | "fuchsia.950" | "purple.50" | "purple.100" | "purple.200" | "purple.300" | "purple.400" | "purple.500" | "purple.600" | "purple.700" | "purple.800" | "purple.900" | "purple.950" | "violet.50" | "violet.100" | "violet.200" | "violet.300" | "violet.400" | "violet.500" | "violet.600" | "violet.700" | "violet.800" | "violet.900" | "violet.950" | "indigo.50" | "indigo.100" | "indigo.200" | "indigo.300" | "indigo.400" | "indigo.500" | "indigo.600" | "indigo.700" | "indigo.800" | "indigo.900" | "indigo.950" | "blue.50" | "blue.100" | "blue.200" | "blue.300" | "blue.400" | "blue.500" | "blue.600" | "blue.700" | "blue.800" | "blue.900" | "blue.950" | "sky.50" | "sky.100" | "sky.200" | "sky.300" | "sky.400" | "sky.500" | "sky.600" | "sky.700" | "sky.800" | "sky.900" | "sky.950" | "cyan.50" | "cyan.100" | "cyan.200" | "cyan.300" | "cyan.400" | "cyan.500" | "cyan.600" | "cyan.700" | "cyan.800" | "cyan.900" | "cyan.950" | "teal.50" | "teal.100" | "teal.200" | "teal.300" | "teal.400" | "teal.500" | "teal.600" | "teal.700" | "teal.800" | "teal.900" | "teal.950" | "emerald.50" | "emerald.100" | "emerald.200" | "emerald.300" | "emerald.400" | "emerald.500" | "emerald.600" | "emerald.700" | "emerald.800" | "emerald.900" | "emerald.950" | "green.50" | "green.100" | "green.200" | "green.300" | "green.400" | "green.500" | "green.600" | "green.700" | "green.800" | "green.900" | "green.950" | "lime.50" | "lime.100" | "lime.200" | "lime.300" | "lime.400" | "lime.500" | "lime.600" | "lime.700" | "lime.800" | "lime.900" | "lime.950" | "yellow.50" | "yellow.100" | "yellow.200" | "yellow.300" | "yellow.400" | "yellow.500" | "yellow.600" | "yellow.700" | "yellow.800" | "yellow.900" | "yellow.950" | "orange.50" | "orange.100" | "orange.200" | "orange.300" | "orange.400" | "orange.500" | "orange.600" | "orange.700" | "orange.800" | "orange.900" | "orange.950" | "red.50" | "red.100" | "red.200" | "red.300" | "red.400" | "red.500" | "red.600" | "red.700" | "red.800" | "red.900" | "red.950" | "neutral.50" | "neutral.100" | "neutral.200" | "neutral.300" | "neutral.400" | "neutral.500" | "neutral.600" | "neutral.700" | "neutral.800" | "neutral.900" | "neutral.950" | "stone.50" | "stone.100" | "stone.200" | "stone.300" | "stone.400" | "stone.500" | "stone.600" | "stone.700" | "stone.800" | "stone.900" | "stone.950" | "zinc.50" | "zinc.100" | "zinc.200" | "zinc.300" | "zinc.400" | "zinc.500" | "zinc.600" | "zinc.700" | "zinc.800" | "zinc.900" | "zinc.950" | "slate.50" | "slate.100" | "slate.200" | "slate.300" | "slate.400" | "slate.500" | "slate.600" | "slate.700" | "slate.800" | "slate.900" | "slate.950" | "current" | "black" | "white" | "transparent" | "amber.50" | "amber.100" | "amber.200" | "amber.300" | "amber.400" | "amber.500" | "amber.600" | "amber.700" | "amber.800" | "amber.900" | "amber.950" | "amber.light.1" | "amber.light.2" | "amber.light.3" | "amber.light.4" | "amber.light.5" | "amber.light.6" | "amber.light.7" | "amber.light.8" | "amber.light.9" | "amber.light.10" | "amber.light.11" | "amber.light.12" | "amber.light.a1" | "amber.light.a2" | "amber.light.a3" | "amber.light.a4" | "amber.light.a5" | "amber.light.a6" | "amber.light.a7" | "amber.light.a8" | "amber.light.a9" | "amber.light.a10" | "amber.light.a11" | "amber.light.a12" | "amber.dark.1" | "amber.dark.2" | "amber.dark.3" | "amber.dark.4" | "amber.dark.5" | "amber.dark.6" | "amber.dark.7" | "amber.dark.8" | "amber.dark.9" | "amber.dark.10" | "amber.dark.11" | "amber.dark.12" | "amber.dark.a1" | "amber.dark.a2" | "amber.dark.a3" | "amber.dark.a4" | "amber.dark.a5" | "amber.dark.a6" | "amber.dark.a7" | "amber.dark.a8" | "amber.dark.a9" | "amber.dark.a10" | "amber.dark.a11" | "amber.dark.a12" | "gray.50" | "gray.100" | "gray.200" | "gray.300" | "gray.400" | "gray.500" | "gray.600" | "gray.700" | "gray.800" | "gray.900" | "gray.950" | "gray.light.1" | "gray.light.2" | "gray.light.3" | "gray.light.4" | "gray.light.5" | "gray.light.6" | "gray.light.7" | "gray.light.8" | "gray.light.9" | "gray.light.10" | "gray.light.11" | "gray.light.12" | "gray.light.a1" | "gray.light.a2" | "gray.light.a3" | "gray.light.a4" | "gray.light.a5" | "gray.light.a6" | "gray.light.a7" | "gray.light.a8" | "gray.light.a9" | "gray.light.a10" | "gray.light.a11" | "gray.light.a12" | "gray.dark.1" | "gray.dark.2" | "gray.dark.3" | "gray.dark.4" | "gray.dark.5" | "gray.dark.6" | "gray.dark.7" | "gray.dark.8" | "gray.dark.9" | "gray.dark.10" | "gray.dark.11" | "gray.dark.12" | "gray.dark.a1" | "gray.dark.a2" | "gray.dark.a3" | "gray.dark.a4" | "gray.dark.a5" | "gray.dark.a6" | "gray.dark.a7" | "gray.dark.a8" | "gray.dark.a9" | "gray.dark.a10" | "gray.dark.a11" | "gray.dark.a12" | "sand.light.1" | "sand.light.2" | "sand.light.3" | "sand.light.4" | "sand.light.5" | "sand.light.6" | "sand.light.7" | "sand.light.8" | "sand.light.9" | "sand.light.10" | "sand.light.11" | "sand.light.12" | "sand.light.a1" | "sand.light.a2" | "sand.light.a3" | "sand.light.a4" | "sand.light.a5" | "sand.light.a6" | "sand.light.a7" | "sand.light.a8" | "sand.light.a9" | "sand.light.a10" | "sand.light.a11" | "sand.light.a12" | "sand.dark.1" | "sand.dark.2" | "sand.dark.3" | "sand.dark.4" | "sand.dark.5" | "sand.dark.6" | "sand.dark.7" | "sand.dark.8" | "sand.dark.9" | "sand.dark.10" | "sand.dark.11" | "sand.dark.12" | "sand.dark.a1" | "sand.dark.a2" | "sand.dark.a3" | "sand.dark.a4" | "sand.dark.a5" | "sand.dark.a6" | "sand.dark.a7" | "sand.dark.a8" | "sand.dark.a9" | "sand.dark.a10" | "sand.dark.a11" | "sand.dark.a12" | "amber.1" | "amber.2" | "amber.3" | "amber.4" | "amber.5" | "amber.6" | "amber.7" | "amber.8" | "amber.9" | "amber.10" | "amber.11" | "amber.12" | "amber.a1" | "amber.a2" | "amber.a3" | "amber.a4" | "amber.a5" | "amber.a6" | "amber.a7" | "amber.a8" | "amber.a9" | "amber.a10" | "amber.a11" | "amber.a12" | "amber.default" | "amber.emphasized" | "amber.fg" | "amber.text" | "sand.1" | "sand.2" | "sand.3" | "sand.4" | "sand.5" | "sand.6" | "sand.7" | "sand.8" | "sand.9" | "sand.10" | "sand.11" | "sand.12" | "sand.a1" | "sand.a2" | "sand.a3" | "sand.a4" | "sand.a5" | "sand.a6" | "sand.a7" | "sand.a8" | "sand.a9" | "sand.a10" | "sand.a11" | "sand.a12" | "sand.default" | "sand.emphasized" | "sand.fg" | "sand.text" | "gray.1" | "gray.2" | "gray.3" | "gray.4" | "gray.5" | "gray.6" | "gray.7" | "gray.8" | "gray.9" | "gray.10" | "gray.11" | "gray.12" | "gray.a1" | "gray.a2" | "gray.a3" | "gray.a4" | "gray.a5" | "gray.a6" | "gray.a7" | "gray.a8" | "gray.a9" | "gray.a10" | "gray.a11" | "gray.a12" | "gray.default" | "gray.emphasized" | "gray.fg" | "gray.text" | "accent.1" | "accent.2" | "accent.3" | "accent.4" | "accent.5" | "accent.6" | "accent.7" | "accent.8" | "accent.9" | "accent.10" | "accent.11" | "accent.12" | "accent.a1" | "accent.a2" | "accent.a3" | "accent.a4" | "accent.a5" | "accent.a6" | "accent.a7" | "accent.a8" | "accent.a9" | "accent.a10" | "accent.a11" | "accent.a12" | "accent.default" | "accent.emphasized" | "accent.fg" | "accent.text" | "bg.canvas" | "bg.default" | "bg.subtle" | "bg.muted" | "bg.emphasized" | "bg.disabled" | "fg.default" | "fg.muted" | "fg.subtle" | "fg.disabled" | "border.default" | "border.muted" | "border.subtle" | "border.disabled" | "border.outline" | "colorPalette.50" | "colorPalette.100" | "colorPalette.200" | "colorPalette.300" | "colorPalette.400" | "colorPalette.500" | "colorPalette.600" | "colorPalette.700" | "colorPalette.800" | "colorPalette.900" | "colorPalette.950" | "colorPalette" | "colorPalette.light.1" | "colorPalette.1" | "colorPalette.light.2" | "colorPalette.2" | "colorPalette.light.3" | "colorPalette.3" | "colorPalette.light.4" | "colorPalette.4" | "colorPalette.light.5" | "colorPalette.5" | "colorPalette.light.6" | "colorPalette.6" | "colorPalette.light.7" | "colorPalette.7" | "colorPalette.light.8" | "colorPalette.8" | "colorPalette.light.9" | "colorPalette.9" | "colorPalette.light.10" | "colorPalette.10" | "colorPalette.light.11" | "colorPalette.11" | "colorPalette.light.12" | "colorPalette.12" | "colorPalette.light.a1" | "colorPalette.a1" | "colorPalette.light.a2" | "colorPalette.a2" | "colorPalette.light.a3" | "colorPalette.a3" | "colorPalette.light.a4" | "colorPalette.a4" | "colorPalette.light.a5" | "colorPalette.a5" | "colorPalette.light.a6" | "colorPalette.a6" | "colorPalette.light.a7" | "colorPalette.a7" | "colorPalette.light.a8" | "colorPalette.a8" | "colorPalette.light.a9" | "colorPalette.a9" | "colorPalette.light.a10" | "colorPalette.a10" | "colorPalette.light.a11" | "colorPalette.a11" | "colorPalette.light.a12" | "colorPalette.a12" | "colorPalette.dark.1" | "colorPalette.dark.2" | "colorPalette.dark.3" | "colorPalette.dark.4" | "colorPalette.dark.5" | "colorPalette.dark.6" | "colorPalette.dark.7" | "colorPalette.dark.8" | "colorPalette.dark.9" | "colorPalette.dark.10" | "colorPalette.dark.11" | "colorPalette.dark.12" | "colorPalette.dark.a1" | "colorPalette.dark.a2" | "colorPalette.dark.a3" | "colorPalette.dark.a4" | "colorPalette.dark.a5" | "colorPalette.dark.a6" | "colorPalette.dark.a7" | "colorPalette.dark.a8" | "colorPalette.dark.a9" | "colorPalette.dark.a10" | "colorPalette.dark.a11" | "colorPalette.dark.a12" | "colorPalette.default" | "colorPalette.emphasized" | "colorPalette.fg" | "colorPalette.text" | "colorPalette.canvas" | "colorPalette.subtle" | "colorPalette.muted" | "colorPalette.disabled" | "colorPalette.outline"

export type DurationToken = "fastest" | "faster" | "fast" | "normal" | "slow" | "slower" | "slowest"

export type EasingToken = "linear" | "in" | "out" | "in-out" | "pulse" | "default" | "emphasized-in" | "emphasized-out"

export type FontSizeToken = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"

export type FontWeightToken = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"

export type LetterSpacingToken = "tighter" | "tight" | "normal" | "wide" | "wider" | "widest"

export type LineHeightToken = "snug" | "none" | "tight" | "normal" | "relaxed" | "loose"

export type RadiusToken = "none" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full" | "l1" | "l2" | "l3"

export type SizeToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "prose" | "0.5" | "1.5" | "2.5" | "3.5" | "4.5" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "full" | "min" | "max" | "fit" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type SpacingToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "0.5" | "1.5" | "2.5" | "3.5" | "4.5" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9" | "-10" | "-11" | "-12" | "-14" | "-16" | "-20" | "-24" | "-28" | "-32" | "-36" | "-40" | "-44" | "-48" | "-52" | "-56" | "-60" | "-64" | "-72" | "-80" | "-96" | "-0.5" | "-1.5" | "-2.5" | "-3.5" | "-4.5"

export type ZIndexToken = "hide" | "base" | "docked" | "dropdown" | "sticky" | "banner" | "overlay" | "modal" | "popover" | "skipLink" | "toast" | "tooltip"

export type FontToken = "sans" | "serif" | "mono" | "philosopher" | "pirataOne"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce" | "fade-in" | "fade-out" | "slide-in" | "slide-out" | "slide-in-left" | "slide-out-left" | "slide-in-right" | "slide-out-right" | "collapse-in" | "collapse-out" | "fadeIn" | "fadeOut" | "skeleton-pulse"

export type Tokens = {
		aspectRatios: AspectRatioToken
		shadows: ShadowToken
		animations: AnimationToken
		blurs: BlurToken
		borders: BorderToken
		colors: ColorToken
		durations: DurationToken
		easings: EasingToken
		fontSizes: FontSizeToken
		fontWeights: FontWeightToken
		letterSpacings: LetterSpacingToken
		lineHeights: LineHeightToken
		radii: RadiusToken
		sizes: SizeToken
		spacing: SpacingToken
		zIndex: ZIndexToken
		fonts: FontToken
		breakpoints: BreakpointToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"