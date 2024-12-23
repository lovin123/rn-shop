import { Tabs } from "expo-router";

const OrdersLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default OrdersLayout;
