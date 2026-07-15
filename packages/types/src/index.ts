export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface HealthResponse {
  status: string;
  timestamp: string;
}
