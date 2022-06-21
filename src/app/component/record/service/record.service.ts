import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIUrl } from "src/app/config/api.url";
import { RecordDto } from "src/app/dto/record/record.dto";
import { AccountService } from "src/app/service/account.service";

@Injectable()
export class RecordService {
    constructor(private httpClient: HttpClient, private accountService: AccountService) { }

    public record(record: RecordDto.Record): Observable<void> {
        return new Observable<void>(observer => {
            record.accountSeq = this.accountService.accountSeq;

            this.httpClient.post<void>(APIUrl.RECORD, record).subscribe(
                response => {
                    observer.next();
                }
            );
        });
    }
}