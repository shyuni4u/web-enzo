export const DASHBOARD_INFO_SET = 'DASHBOARD-INFO/SET';

export type dashboardInfoState = {
  nvidia: {
    realtime: Array<string>;
    ignore: Array<string>;
  };
  amd: {
    realtime: Array<string>;
    ignore: Array<string>;
  };
};

export const initialState: dashboardInfoState = {
  nvidia: {
    realtime: [
      'gpu_temp',
      'gpu_temp_max_threshold',
      'gpu_temp_slow_threshold',
      'gpu_util',
      'memory_util',
      'encoder_util',
      'decoder_util'
    ],
    ignore: [
      'ecc_errors',
      'ibmnpu',
      'gpu_virtualization_mode',
      'gpu_operation_mode',
      'inforom_version',
      'board_id',
      'performance_state',
      'fan_speed',
      'accounted_processes',
      'driver_model',
      'accounting_mode_buffer_size',
      'accounting_mode',
      'display_active',
      'display_mode',
      'product_brand',
      'multigpu_board',
      'minor_number',
      'gpu_part_number',
      'compute_mode',
      'ecc_mode',
      'clock_policy',
      'max_customer_boost_clocks',
      'clocks_throttle_reasons',
      'bar1_memory_usage',
      'encoder_stats',
      'fbc_stats',
      'retired_pages',
      'power_management',
      'power_state',
      'default_power_limit',
      'enforced_power_limit',
      'min_power_limit',
      'max_power_limit',
      'video_clock',
      'graphics_clock',
      'applications_clocks',
      'default_applications_clocks',
      'max_clocks',
      'supported_clocks'
    ]
  },
  amd: {
    realtime: [
      'Average Graphics Package Power (W)',
      'Temperature (Sensor edge) (C)',
      'Temperature (Sensor junction) (C)',
      'Temperature (Sensor mem) (C)',
      'For Manual'
    ],
    ignore: [
      'RLC SRLG firmware version',
      'RLC SRLS firmware version',
      'SDMA firmware version',
      'SDMA2 firmware version',
      'SMC firmware version',
      'SOS firmware version',
      'RLC SRLC firmware version',
      'RLC firmware version',
      'PFP firmware version',
      'MEC2 firmware version',
      'MEC firmware version',
      'ME firmware version',
      'MC firmware version',
      'DMCU firmware version',
      'CE firmware version',
      'ASD firmware version',
      'TA RAS firmware version',
      'TA XGMI firmware version',
      'UVD firmware version',
      'VCE firmware version',
      'VCN firmware version'
    ]
  }
};

export const setDashboardIfno = (obj: dashboardInfoState) => ({
  type: DASHBOARD_INFO_SET,
  nvidia: {
    realtime: obj.nvidia.realtime,
    ignore: obj.nvidia.ignore
  },
  amd: {
    realtime: obj.amd.realtime,
    ignore: obj.amd.ignore
  }
});

type actions = {
  type: string;
} & dashboardInfoState;

const reducer = (state: dashboardInfoState = initialState, action: actions): dashboardInfoState | undefined => {
  switch (action.type) {
    case DASHBOARD_INFO_SET:
      return {
        ...state,
        nvidia: {
          realtime: action.nvidia.realtime,
          ignore: action.nvidia.ignore
        },
        amd: {
          realtime: action.amd.realtime,
          ignore: action.amd.ignore
        }
      };
    default:
      return state;
  }
};

export default reducer;
