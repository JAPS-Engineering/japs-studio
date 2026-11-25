# ChoiceField

Grupo de opciones (radio o checkbox) mostradas como píldoras; la elegida se rellena de agua con un visto.

## Markup
Lo genera `src/components/form/ChoiceField.astro`: un `fieldset.chs` con `legend.chs__lg`, y en `.chs__g` cada `input.chp-in` seguido de su `label.chp`.

## Reglas
- Píldoras de 56 (48 en móvil) sobre `--step`; elegida `--accent` con texto negro.
- El input real queda oculto pero enfocable: el foco se ve en la píldora.
