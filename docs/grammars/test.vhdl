-------------------------------------------------------------------------------
--
-- Copyright (c) 2022 Iain Waugh
-- All rights reserved.
--
-------------------------------------------------------------------------------
--
-- A very plain file
--
-------------------------------------------------------------------------------

library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;

entity hello_world is
  port(
    -- Clock and Reset signals
    clk : in std_logic;
    rst : in std_logic;

    i_data_a : in unsigned(7 downto 0);
    i_data_b : in unsigned(7 downto 0);

    o_data : out unsigned(7 downto 0)
    );
end;