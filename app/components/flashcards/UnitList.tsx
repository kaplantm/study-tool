"use client";

import { Unit } from "@/app/types";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";

type UnitListProps = {
  units: Unit[];
  selectedUnitId: string | null;
  onSelectUnit: (unit: Unit) => void;
};

export default function UnitList({
  units,
  selectedUnitId,
  onSelectUnit,
}: UnitListProps) {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Select a unit</Typography>
      <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" } }}>
        {units.map((unit) => (
          <ButtonBase
            key={unit.id}
            onClick={() => onSelectUnit(unit)}
            sx={{ display: "block", p: 2, border: 1, borderRadius: 3, textAlign: "left", borderColor: selectedUnitId === unit.id ? "text.primary" : "divider", bgcolor: selectedUnitId === unit.id ? "text.primary" : "action.hover", color: selectedUnitId === unit.id ? "common.white" : "text.primary", "&:hover": { borderColor: "text.secondary" } }}
          >
            <Typography variant="caption" sx={{ display: "block", fontWeight: 700, textTransform: "uppercase" }} color={selectedUnitId === unit.id ? "inherit" : "text.secondary"}>
              Unit {unit.number}
            </Typography>
            <Typography variant="h6">{unit.title}</Typography>
            <Typography variant="body2" color={selectedUnitId === unit.id ? "inherit" : "text.secondary"}>
              {unit.description}
            </Typography>
          </ButtonBase>
        ))}
      </Box>
    </Stack>
  );
}
