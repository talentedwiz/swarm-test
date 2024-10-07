import { useState, useEffect } from "react";
// ton
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import { Address } from "ton-core";
// mui
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// components
import Predictions from "./components/Predictions";
import OwnerSection from "./components/OwnerSection";
import CreateSection from "./components/CreateSection";

export default function App() {
  const wallet = useTonWallet();

  const [role, setRole] = useState(3);
  const [owner, setOwner] = useState("");
  const [admins, setAdmins] = useState([]);

  const loadRoles = () => {
    setOwner("UQBqZuKVB6IW7PHhYUCNADvHfW4-TVgM3L8V2rlVqtWVciEl");
    setAdmins([
      "UQBqZuKVB6IW7PHhYUCNADvHfW4-TVgM3L8V2rlVqtWVciEl",
      "UQBqZuKVB6IW7PHhYUCNADvHfW4-TVgM3L8V2rlVqtWVciEl",
      "UQBqZuKVB6IW7PHhYUCNADvHfW4-TVgM3L8V2rlVqtWVciEl",
    ]);
  };

  useEffect(() => {
    loadRoles();
  }, []);

  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        py={2}
      >
        <Typography variant="h5">TEST</Typography>
        <TonConnectButton />
      </Stack>
      <Divider />
      {wallet && (
        <Stack spacing={3} mt={3}>
          <Tabs value={role} onChange={(e, newValue) => setRole(newValue)}>
            <Tab
              label="Owner"
              value={1}
              disabled={
                !Address.parse(owner).equals(
                  Address.parse(wallet.account.address)
                )
              }
            />
            <Tab
              label="Admin"
              value={2}
              disabled={!checkAddressArray(admins, wallet.account.address)}
            />
            <Tab label="User" value={3} />
          </Tabs>
          {role === 1 && <OwnerSection admins={admins} />}
          {role === 2 && <CreateSection />}
          <Predictions role={role} />
        </Stack>
      )}
    </Container>
  );
}

function checkAddressArray(array, address) {
  let isIncluded = false;
  for (const element of array) {
    if (Address.parse(address).equals(Address.parse(element))) {
      isIncluded = true;
      break;
    }
  }

  return isIncluded;
}
