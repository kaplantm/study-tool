"use client";

import { useState } from "react";
import { Alert, Button, Stack, Typography } from "@mui/material";

type MoreInfoProps = {
  items?: string[] | null;
};

export default function MoreInfo({ items }: MoreInfoProps) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  if (!items?.length) return null;

  return (
    <Stack spacing={1.5} sx={{ borderTop: 1, borderColor: "divider", pt: 2 }}>
      {!showMoreInfo ? (
        <Button
          type="button"
          onClick={() => setShowMoreInfo(true)}
          variant="outlined" size="small" sx={{ alignSelf: "flex-start" }}
        >
          💡 More Info
        </Button>
      ) : (
        <Alert severity="info">
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {items.map((info, index) => (
              <Typography component="li" key={`${info}-${index}`}>
                {info}
              </Typography>
            ))}
          </ul>
          <Button
            type="button"
            onClick={() => setShowMoreInfo(false)}
            size="small" sx={{ mt: 1, textDecoration: "underline" }}
          >
            Hide info
          </Button>
        </Alert>
      )}
    </Stack>
  );
}
